import SingleGiftIdea from 'src/components/GiftIdea/SingleGiftIdea';
import React, { Component } from 'react';
import LoadingIcon from 'src/components/LoadingIcon';
import loadingIconService from 'src/components/LoadingIcon/LoadingIcon.service';

import GiftIdeaListingService from './GiftIdeaListing.service';

class GiftIdeaListing extends Component {
  constructor (props) {
    super(props);
    this.state = {
      gifts: []
    };
    this.displayGiftIdeas = this.displayGiftIdeas.bind(this);
  }

  async componentDidMount () {
    loadingIconService.showIcon();
    const giftIdeas = await GiftIdeaListingService.fetchAllGiftIdeas()
      .catch(error => {
        loadingIconService.hideIcon();

        throw error;
      });

    loadingIconService.hideIcon();

    this.setState({
      gifts: giftIdeas
    });
  }

  displayGiftIdeas (gifts) {
    return gifts.map(gift => {
      if (gift && gift.id && gift.image_url && gift.label) {
        return (
          <SingleGiftIdea
            id={gift.id}
            key={gift.id}
            image_url={gift.image_url}
            title={gift.label}
          />
        );
      }
      return null;
    });
  }

  render () {
    const { gifts } = this.state;
    return (
      <div>
        <div className='row justify-content-center'>
          <div
            className='col-10 col-md-4'
          >
            <h4 className='jumbotron-heading'>All the gift ideas we have at the moment:</h4>
            <LoadingIcon />
          </div>
        </div>
        <div
          className='container'
          style={{ marginTop: '3.5%' }}
        >
          <div className='row'>
            {gifts && this.displayGiftIdeas(gifts)}
          </div>
        </div>
      </div>
    );
  }
}

export default GiftIdeaListing;
