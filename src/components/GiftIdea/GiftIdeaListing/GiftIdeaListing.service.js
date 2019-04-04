import requestClient from 'src/libs/HttpRequestClient';

export default class GiftIdeaListingService {
  static fetchAllGiftIdeas () {
    return requestClient.get('/gift-idea/all')
      .then(res => res.data)
      .catch(error => {
        throw error;
      });
  }
}
