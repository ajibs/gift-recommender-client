import React from 'react';

const LoadingIcon = () => (
  <div
    id='chill-out'
    className='row justify-content-center'
    style={{ display: 'none', marginTop: '5%', marginBottom: '5%' }}
  >
    <div className='col-10 col-md-4'>
      <img
        className='img-fluid'
        src='/img/adorable-kitten.gif'
      />
    </div>
  </div>
);

export default LoadingIcon;
