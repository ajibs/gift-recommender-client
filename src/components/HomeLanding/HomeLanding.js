import React from 'react';
import { Link } from 'react-router-dom';

const HomeLanding = () => (
  <section className='jumbotron text-center'>
    <div className='container'>
      <h1 className='jumbotron-heading'>Gift Recommender</h1>
      <p className='lead text-muted'>Discover <b>cool and affordable gifts</b> for your loved ones.</p>
      <p>
        <Link
          to='/'
          className='btn btn-primary my-2'
          style={{ marginRight: '1%' }}
        >Search</Link>
        <Link
          to={'/gift-idea'}
          className='btn btn-secondary my-2'
          style={{ marginRight: '1%' }}
        >Explore</Link>
        <Link
          to={'/gift-suggestion'}
          className='btn btn-info my-2'
        >Contribute</Link>
      </p>
    </div>
  </section>
);

export default HomeLanding;
