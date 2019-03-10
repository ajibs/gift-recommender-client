import React, { Component } from 'react';
import 'src/App.css';
import requestClient from 'src/libs/HttpRequestClient';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      age: '',
      budget: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange (event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    const payload = Object.assign({}, this.state);
    requestClient.post('/gifts', payload)
      .then(res => {
        console.log('response =====>', res.data);
      })
      .catch(error => {
        console.log('error occurred', error);
        throw error;
      });
  }

  render () {
    return (
      <div className='row justify-content-center'>
        <div className='col-md-4'>
          <form onSubmit={this.handleSubmit}>
            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <label
                  className='input-group-text'
                  htmlFor='age'
                >Age in Years</label>
              </div>
              <select
                name='age'
                className='custom-select'
                id='age_selection'
                value={this.state.age}
                onChange={this.handleInputChange}
              >
                <option selected>Choose...</option>
                <option value='zero_to_fifteen'>0-15</option>
                <option value='sixteen_to_thirty'>16-30</option>
              </select>
            </div>
            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <label
                  className='input-group-text'
                  htmlFor='budget'
                >Budget in Naira</label>
              </div>
              <select
                name='budget'
                className='custom-select'
                id='budget'
                value={this.state.budget}
                onChange={this.handleInputChange}
              >
                <option selected>Choose...</option>
                <option value='zero'>0</option>
                <option value='one_to_five_thousand'>1 - 5000</option>
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
