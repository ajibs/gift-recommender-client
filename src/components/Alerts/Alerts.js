import React from 'react';

class Alerts {
  static successAlert (message) {
    return (
      <div
        className='alert alert-success'
        role='alert'
      >
        {message}
      </div>
    );
  }

  static dangerAlert (message) {
    return (
      <div
        className='alert alert-danger'
        role='alert'
      >
        {message}
      </div>
    );
  }
}

export default Alerts;
