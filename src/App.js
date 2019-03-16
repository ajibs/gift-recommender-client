import React, { Component } from 'react';
import requestClient from 'src/libs/HttpRequestClient';
import SearchGiftIdea from 'src/components/GiftIdea/SearchGiftIdea';

class App extends Component {
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

  handleSubmit (event) {
    event.preventDefault();
    const { budget } = this.state;
    const payload = { budget };

    requestClient.post('/gifts', payload)
      .then(res => {
        this.setState({
          giftIdeas: res.data
        });
      })
      .catch(error => {
        throw error;
      });
  }

  render () {
    const { giftIdeas, budget } = this.state;
    return (
      <SearchGiftIdea
        budget={budget}
        giftIdeas={giftIdeas}
        handleSubmit={this.handleSubmit}
        handleInputChange={this.handleInputChange}
      />
    );
  }
}

export default App;
