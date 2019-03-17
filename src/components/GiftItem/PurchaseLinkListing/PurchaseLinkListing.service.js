import requestClient from 'src/libs/HttpRequestClient';

export default class PurchaseLinkListingService {
  static fetchGiftsUnderAnIdea (giftIdeaId) {
    return requestClient.get(`/gift/gift-idea/${giftIdeaId}`)
      .then(res => res.data)
      .catch(error => {
        throw error;
      });
  }
}
