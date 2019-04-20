import axios from 'axios';

class HttpRequestClient {
    axiosInstance = null;
    constructor () {
      this.axiosInstance = axios.create({
        baseURL: `${process.env.REACT_APP_HOST}`,
        headers: {
          'Content-Type': 'application/json'
        },
        transformResponse: [
          (data) => this.handleResponse(data)
        ],
        timeout: 4000
      });
    }

    handleResponse (data) {
      let response;

      try {
        response = JSON.parse(data);
      } catch (error) {
        throw Error(`[HttpRequestClient] Error parsing response JSON data - ${JSON.stringify(error)}`);
      }

      if (response.status === 200 && response.data) {
        return response.data;
      } else {
        throw new Error(response.message);
      }
    }

    get (url, params = {}) {
      return this.axiosInstance
        .get(url, params);
    }

    post (url, params = {}) {
      return this.axiosInstance
        .post(url, params);
    }

    put (url, params = {}) {
      return this.axiosInstance
        .put(url, params);
    }
}

export default new HttpRequestClient();
