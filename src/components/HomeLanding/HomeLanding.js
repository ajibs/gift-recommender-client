import React from 'react';

const HomeLanding = () => (
  <section className='jumbotron text-center'>
    <div className='container'>
      <h1 className='jumbotron-heading'>Gift Recommender</h1>
      <p className='lead text-muted'>Discover <b>FANTASTIC GIFTS</b> for friends and family. Built for lazy people
                that want to dazzle their loved ones.</p>
      <p>
        <a
          href='#searchGifts'
          className='btn btn-primary my-2'
        >Get Started</a>
      </p>
    </div>
  </section>
);

export default HomeLanding;
