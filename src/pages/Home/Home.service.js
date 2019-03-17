import requestClient from 'src/libs/HttpRequestClient';

export default class HomeService {
  static searchGifts (payload) {
    return requestClient.post('/gift', payload)
      .then(res => res.data)
      .catch(error => {
        throw error;
      });
  }
}
