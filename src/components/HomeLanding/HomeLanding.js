import React from 'react';
import { Link } from 'react-router-dom';

const HomeLanding = () => (
  <section className='jumbotron text-center'>
    <div className='container'>
      <h1 className='jumbotron-heading'>Gift Recommender</h1>
      <p className='lead text-muted'>Discover <b>FANTASTIC GIFTS</b> for friends and family. Built for lazy people
                    that want to dazzle their loved ones.</p>
      <p>
        <Link
          to='/'
          className='btn btn-primary my-2'
          style={{ marginRight: '1%' }}
        >Search</Link>
        <Link
          to={'/gift-idea'}
          className='btn btn-secondary my-2'
        >Explore</Link>
      </p>
    </div>
  </section>
);

export default HomeLanding;
