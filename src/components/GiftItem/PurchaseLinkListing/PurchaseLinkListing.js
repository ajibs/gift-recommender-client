import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingIcon from 'src/components/LoadingIcon';
import loadingIconService from 'src/components/LoadingIcon/LoadingIcon.service';
import SinglePurchaseLink from 'src/components/GiftItem/SinglePurchaseLink';

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
    loadingIconService.showIcon();
    const gifts = await PurchaseLinkListingService.fetchGiftsUnderAnIdea(giftIdeaId)
      .catch(error => {
        loadingIconService.hideIcon();
        console.error(error);
      });

    loadingIconService.hideIcon();

    if (gifts && gifts.length > 0 && gifts[0].giftIdea && gifts[0].giftIdea.label) {
      this.setState({
        gifts,
        giftIdeaLabel: gifts[0].giftIdea.label
      });
    }
  }

  fetchPurchaseLinks (gifts) {
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

  displayGiftPurchaseLinks (gifts) {
    const purchaseLinks = this.fetchPurchaseLinks(gifts);
    return (
      <div
        className='container'
        style={{ marginTop: '3.5%' }}
      >
        <div className='row'>        {purchaseLinks}
          <p className='jumbotron-heading justify-content-center'>
            Disclaimer: <strong>The links above are stuff we found online and we do not guarantee their authenticity.
            Thus take care not to be scammed.</strong>
          </p>
        </div>
      </div>
    );
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
        <LoadingIcon />
        {gifts && this.displayGiftPurchaseLinks(gifts)}
      </div>
    );
  }
}

PurchaseLinkListing.propTypes = {
  match: PropTypes.object.isRequired
};

export default PurchaseLinkListing;
