import requestClient from 'src/libs/HttpRequestClient';

export default class GiftSuggestionService {
  static createGiftSuggestion (payload) {
    return requestClient.post('/gift-suggestion', payload)
      .then(res => res)
      .catch(error => {
        if (error.message) throw error.message;
      });
  }
}
