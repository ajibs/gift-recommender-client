import React, { Component } from 'react';
import SearchGiftIdea from 'src/components/GiftIdea/SearchGiftIdea';
import HomeLanding from 'src/components/HomeLanding';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GiftIdeaListing from 'src/components/GiftIdea/GiftIdeaListing';

import HomeService from './Home.service';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      budget: 'one_to_five_thousand',
      giftIdeas: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange (event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  async handleSubmit (event) {
    event.preventDefault();
    const { budget } = this.state;
    const payload = { budget };

    const result = await HomeService.searchGifts(payload);
    this.setState({
      giftIdeas: result
    });
  }

  render () {
    const { giftIdeas, budget } = this.state;
    return (
      <Router>

        <Header />
        <main role='main'>
          <HomeLanding />
          <div className='album py-5 bg-light'>
            <Switch>
              <Route
                exact
                path='/'
                render={() => (
                  <SearchGiftIdea
                    budget={budget}
                    giftIdeas={giftIdeas}
                    handleSubmit={this.handleSubmit}
                    handleInputChange={this.handleInputChange}
                  />)}
              />
              <Route
                exact
                path='/gift-idea'
                render={() => <GiftIdeaListing />}
              />
            </Switch>
          </div>
        </main>
        <Footer />
      </Router>
    );
  }
  // link to explore page: all gift ideas
  // link gift idea to purchase link page
}

export default Home;
