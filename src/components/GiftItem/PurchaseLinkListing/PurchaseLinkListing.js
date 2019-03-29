import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SinglePurchaseLink from '../SinglePurchaseLink';

import PurchaseLinkListingService from './PurchaseLinkListing.service';

class PurchaseLinkListing extends Component {
  constructor (props) {
    super(props);
    this.state = {
      gifts: [],
      giftIdeaId: props.match.params.gift_idea_id,
      giftIdeaLabel: ''
    };
    this.displayGiftPurchaseLinks = this.displayGiftPurchaseLinks.bind(this);
  }

  async componentDidMount () {
    const { giftIdeaId } = this.state;
    const gifts = await PurchaseLinkListingService.fetchGiftsUnderAnIdea(giftIdeaId)
      .catch(error => {
        throw error;
      });

    if (gifts && gifts.length > 0 && gifts[0].giftIdea && gifts[0].giftIdea.label) {
      this.setState({
        gifts,
        giftIdeaLabel: gifts[0].giftIdea.label
      });
    }
  }

  displayGiftPurchaseLinks (gifts) {
    return gifts.map(gift => {
      if (gift) {
        return (
          <SinglePurchaseLink
            key={gift.id}
            image_url={gift.image_url}
            title={gift.title}
            product_link={gift.product_link}
            price={gift.price}
            description={gift.description}
          />
        );
      }
      return null;
    });
  }

  render () {
    const { gifts, giftIdeaLabel } = this.state;
    return (
      <div>
        <div className='row justify-content-center'>
          <div
            className='col-10 col-md-4'
          >
            <h4 className='jumbotron-heading'>
                            Purchase links to Gift Idea: <strong>{giftIdeaLabel}</strong>
            </h4>
          </div>
        </div>
        <div
          className='container'
          style={{ marginTop: '3.5%' }}
        >
          <div className='row'>
            {gifts && this.displayGiftPurchaseLinks(gifts)}
          </div>
        </div>
      </div>
    );
  }
}

PurchaseLinkListing.propTypes = {
  match: PropTypes.object.isRequired
};

export default PurchaseLinkListing;
