import React from 'react';
import PropTypes from 'prop-types';

const SingleGift = (props) => (
  <div className='col-md-4'>
    <div className='card mb-4 shadow-sm'>
      <img
        src={props.image_url}
        alt={'product'}
      />
      <div className='card-body'>
        <p className='card-text'>{props.description}</p>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='btn-group'>
            <a
              href={props.product_link}
              target={'blank'}
              type='button'
              className='btn btn-sm btn-outline-secondary'
            >Learn More</a>
          </div>
          <small className='text-muted'>₦{props.price}</small>
        </div>
      </div>
    </div>
  </div>
);

SingleGift.propTypes = {
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  product_link: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired
};

export default SingleGift;
