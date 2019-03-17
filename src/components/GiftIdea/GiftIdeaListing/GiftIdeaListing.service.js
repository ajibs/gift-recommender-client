import requestClient from 'src/libs/HttpRequestClient';

export default class GiftIdeaListing {
  static fetchGiftIdeas () {
    return requestClient.get('/gift-idea')
      .then(res => res.data)
      .catch(error => {
        throw error;
      });
  }
}
