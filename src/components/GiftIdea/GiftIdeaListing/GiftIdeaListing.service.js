import requestClient from 'src/libs/HttpRequestClient';

export default class GiftIdeaListingService {
  static fetchGiftIdeas () {
    return requestClient.get('/gift-idea')
      .then(res => res.data)
      .catch(error => {
        throw error;
      });
  }
}
