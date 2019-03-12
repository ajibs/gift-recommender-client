import React, { Component } from 'react';
import requestClient from 'src/libs/HttpRequestClient';
import SingleGift from 'src/components/GiftItem/SingleGift';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      age: 'zero_to_fifteen',
      budget: 'one_to_five_thousand',
      giftItems: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderGiftItems = this.renderGiftItems.bind(this);
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
    const { age, budget } = this.state;
    const payload = { age, budget };

    requestClient.post('/gifts', payload)
      .then(res => {
        this.setState({
          giftItems: res.data
        });
      })
      .catch(error => {
        throw error;
      });
  }

  renderGiftItems (data) {
    return data.map(item => {
      if (item.gift) {
        return (
          <SingleGift
            key={item.gift.id}
            title={item.gift.title}
            description={item.gift.title}
            price={item.gift.price}
            product_link={item.gift.product_link}
            image_url={item.gift.image_url}
          />
        );
      }
      return null;
    });
  }

  render () {
    const { giftItems } = this.state;
    return (
      <div>
        <div className='row justify-content-center'>
          <div
            className='col-10 col-md-4'
            id={'searchGifts'}
          >
            <h4 className='jumbotron-heading'>Give us details about the friend you're getting a gift for and voila</h4>
            <form
              onSubmit={this.handleSubmit}
              style={{ marginTop: '6%' }}
            >
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <label
                    className='input-group-text'
                    htmlFor='age'
                  >Age in Years</label>
                </div>
                <select
                  name='age'
                  className='custom-select'
                  id='age_selection'
                  value={this.state.age}
                  onChange={this.handleInputChange}
                >
                  <option value='zero_to_fifteen'>0 - 15</option>
                  <option value='sixteen_to_thirty'>16 - 30</option>
                </select>
              </div>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <label
                    className='input-group-text'
                    htmlFor='budget'
                  >Budget in Naira</label>
                </div>
                <select
                  name='budget'
                  className='custom-select'
                  id='budget'
                  value={this.state.budget}
                  onChange={this.handleInputChange}
                >
                  <option value='zero'>0</option>
                  <option value='one_to_five_thousand'>1 - 5000</option>
                </select>
              </div>
              <button
                type='submit'
                className='btn btn-primary'
              >Abracadabra</button>
            </form>
          </div>
        </div>
        <div
          className='container'
          style={{ marginTop: '3.5%' }}
        >
          <div className='row'>
            {giftItems &&
            this.renderGiftItems(giftItems)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
