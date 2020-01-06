require('dotenv').config();
module.exports = {
  env: {
    BASE_URL: process.env.BASE_URL,
    IMG_URL: process.env.IMG_URL,
    IMG_URL_ORIGINAL: process.env.IMG_URL_ORIGINAL,
    API_KEY: process.env.API_KEY,
  },
};
