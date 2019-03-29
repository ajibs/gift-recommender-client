import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleGiftIdea = (props) => (
  <div className='col-md-4'>
    <div className='card mb-4 shadow-sm'>
      <Link
        to={`/gift/gift-idea/${props.id}`}
      >
        <img
          className={'img-fluid img-thumbnail'}
          src={props.image_url}
          alt={'product'}
        />
      </Link>
      <div className='card-body'>
        <p className='card-text'>{props.title}</p>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='btn-group'>
            <Link
              to={`/gift/gift-idea/${props.id}`}
              type='button'
              className='btn btn-sm btn-outline-secondary'
            >Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

SingleGiftIdea.propTypes = {
  id: PropTypes.number.isRequired,
  image_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default SingleGiftIdea;
