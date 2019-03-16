import React from 'react';
import PropTypes from 'prop-types';

const SingleGiftIdea = (props) => (
  <div className='col-md-4'>
    <div className='card mb-4 shadow-sm'>
      <img
        src={props.image_url}
        alt={'product'}
      />
      <div className='card-body'>
        <p className='card-text'>{props.title}</p>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='btn-group'>
            <a
              href={'#'}
              target={'blank'}
              type='button'
              className='btn btn-sm btn-outline-secondary'
            >Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

SingleGiftIdea.propTypes = {
  image_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default SingleGiftIdea;
