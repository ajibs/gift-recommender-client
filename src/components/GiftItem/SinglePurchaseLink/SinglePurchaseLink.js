import React from 'react';
import PropTypes from 'prop-types';

const SinglePurchaseLink = (props) => (
  <div className='col-md-4'>
    <div className='card mb-4 shadow-sm'>
      <a
        href={props.product_link}
        target={'blank'}
      >
        <img
          className={'img-fluid img-thumbnail'}
          src={props.image_url}
          alt={'product'}
        />
      </a>
      <div className='card-body'>
        <p className='card-text'>{props.title}</p>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='btn-group'>
            <a
              href={props.product_link}
              target={'blank'}
              type='button'
              className='btn btn-sm btn-outline-secondary'
            >Learn More</a>
          </div>
          <small className='text-muted'>{props.price ? `₦${props.price}` : 'Price Not Available'}</small>
        </div>
      </div>
    </div>
  </div>
);

SinglePurchaseLink.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  product_link: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired
};

export default SinglePurchaseLink;
