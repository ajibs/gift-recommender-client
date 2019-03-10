import React, { Component } from 'react';
import 'src/App.css';
import requestClient from 'src/libs/HttpRequestClient';

class App extends Component {
  componentDidMount () {
    requestClient.get('/test')
      .then(res => {
        // console.log('response raw ======>', res);
      });
  }

  render () {
    return (
      <div className='row justify-content-center'>
        <div className='col-md-4'>
          <form action='/gifts'>
            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <label
                  className='input-group-text'
                  htmlFor='inputGroupSelect01'
                >Age in Years</label>
              </div>
              <select
                className='custom-select'
                id='inputGroupSelect01'
              >
                <option selected>Choose...</option>
                <option value='zero_to_fifteen'>0-15</option>
                <option value='sixteen_to_thirty'>16-30</option>
              </select>
            </div>
            <button
              type='submit'
              className='btn btn-primary'
            >Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
