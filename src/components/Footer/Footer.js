import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className='text-muted'>
    <div className='container'>
      <p className='float-right'>
        <a href='/'>Back to top</a>
      </p>
      <Link
        to={'/gift-suggestion'}
      >
        <p>Contribute Gift Ideas</p>
      </Link>
      <p>
        <a
          href='https://github.com/ajibs'
          target='_blank'
          rel='noopener noreferrer'
        >
          Github
        </a>
      </p>
      <p>Gift Recommender</p>
    </div>
  </footer>
);

export default Footer;
