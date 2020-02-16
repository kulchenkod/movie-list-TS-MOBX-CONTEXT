import axios from 'axios';

axios.defaults.baseURL = process.env.BASE_URL;

axios.interceptors.request.use(config => {
  const newConfig = {
    ...config,
    params: {
      ...config.params,
      language: 'ru-RU',
      api_key: process.env.API_KEY,
    },
  };
  return newConfig;
});
