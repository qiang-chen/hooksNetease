import qs from 'qs';
import axios from 'axios';

const request = axios.create({
    timeout: 5000,
    baseURL:
        process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8888' : ''
});

request.interceptors.request.use(config => {
    config.method === 'post'
        ? (config.data = qs.stringify({
              ...config.data
          }))
        : (config.params = {
              ...config.params
          });
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    return config;
});

request.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        console.log(error);
    }
);

export default request;
