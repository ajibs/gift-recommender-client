import React, { Component, Fragment } from 'react';
import SearchGiftIdea from 'src/components/GiftIdea/SearchGiftIdea';
import HomeLanding from 'src/components/HomeLanding';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

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
      <Fragment>
        <Header />
        <main role='main'>
          <HomeLanding />
          <SearchGiftIdea
            budget={budget}
            giftIdeas={giftIdeas}
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
          />
        </main>
        <Footer />
      </Fragment>
    );
  }
  // link to explore page: all gift ideas
  // link gift idea to purchase link page
}

export default Home;
