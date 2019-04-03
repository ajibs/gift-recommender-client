import React, { Component } from 'react';
import LoadingIcon from 'src/components/LoadingIcon';
import loadingIconService from 'src/components/LoadingIcon/LoadingIcon.service';
import Alerts from 'src/components/Alerts';

import GiftSuggestionService from './GiftSuggestion.service';

const dangerAlert = Alerts.dangerAlert;
const successAlert = Alerts.successAlert;

const submissionResponse = (status) => (
  status
    ? successAlert('Thank You! We have received your gift idea')
    : dangerAlert('Unable to add your gift idea to our list. Please try again')
);

class GiftSuggestion extends Component {
  constructor (props) {
    super(props);
    this.state = {
      giftSuggestionLabel: '',
      giftSuggestionStatus: false,
      giftSuggestionSubmitted: false
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

  displaySuccessOrFailure (response) {
    if (response && response.status === 200) {
      this.setState({
        giftSuggestionStatus: true,
        giftSuggestionLabel: ''
      });
    } else {
      this.setState({
        giftSuggestionStatus: false
      });
    }

    this.setState({
      giftSuggestionSubmitted: true
    });
  }

  async handleSubmit (event) {
    event.preventDefault();
    const { giftSuggestionLabel } = this.state;
    const payload = { giftSuggestionLabel };
    loadingIconService.showIcon();

    const response = await GiftSuggestionService.createGiftSuggestion(payload)
      .catch(errorStatus => {
        loadingIconService.hideIcon();
        console.error(`Error occurred while creating new gift suggestion : ${errorStatus}`);
      });
    loadingIconService.hideIcon();
    this.displaySuccessOrFailure(response);
  }

  render () {
    const { giftSuggestionStatus, giftSuggestionSubmitted } = this.state;
    return (
      <div>
        <div className='row justify-content-center'>
          <div
            className='col-10 col-md-4'
            id={'searchGifts'}
          >
            <h4 className='jumbotron-heading'>We're always excited about new ideas. Please share below: </h4>
            <form
              onSubmit={this.handleSubmit}
              style={{ marginTop: '6%' }}
            >
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  name='giftSuggestionLabel'
                  id='gift-suggestion'
                  aria-describedby='gift suggestion'
                  placeholder='Enter a gift suggestion'
                  onChange={this.handleInputChange}
                />
              </div>
              <button
                type='submit'
                className='btn btn-primary'
              >Submit
              </button>
            </form>
            <LoadingIcon />
          </div>
        </div>
        <div
          className='container'
          style={{ marginTop: '3.5%' }}
        >
          <div className='row justify-content-center'>
            {giftSuggestionSubmitted && submissionResponse(giftSuggestionStatus)}
          </div>
        </div>
      </div>
    );
  }
}

export default GiftSuggestion;
