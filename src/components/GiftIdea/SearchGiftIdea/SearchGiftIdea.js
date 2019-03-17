import React from 'react';
import PropTypes from 'prop-types';
import SingleGiftIdea from 'src/components/GiftIdea/SingleGiftIdea';

const displayGiftIdeas = (data) => data.map(item => {
  if (item && item.giftIdea && item.giftIdea.id && item.giftIdea.label && item.giftIdea.image_url) {
    return (
      <SingleGiftIdea
        key={item.giftIdea.id}
        title={item.giftIdea.label}
        image_url={item.giftIdea.image_url}
      />
    );
  }
  return null;
});

const SearchGiftIdea = (props) => {
  const {
    budget,
    giftIdeas,
    handleSubmit,
    handleInputChange
  } = props;

  return (
    <div>
      <div className='row justify-content-center'>
        <div
          className='col-10 col-md-4'
          id={'searchGifts'}
        >
          <h4 className='jumbotron-heading'>Give us details about the friend you're getting a gift for and voila</h4>
          <form
            onSubmit={handleSubmit}
            style={{ marginTop: '6%' }}
          >
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
                value={budget}
                onChange={handleInputChange}
              >
                <option value='zero'>0</option>
                <option value='one_to_five_thousand'>1 - 5k</option>
                <option value='five_to_ten_thousand'>5.1 - 10k</option>
              </select>
            </div>
            <button
              type='submit'
              className='btn btn-primary'
            >Abracadabra</button>
          </form>
        </div>
      </div>
      <div
        className='container'
        style={{ marginTop: '3.5%' }}
      >
        <div className='row'>
          {giftIdeas &&
            displayGiftIdeas(giftIdeas)
          }
        </div>
      </div>
    </div>
  );
};

SearchGiftIdea.propTypes = {
  budget: PropTypes.string.isRequired,
  giftIdeas: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default SearchGiftIdea;
