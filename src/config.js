const env = process.env;
const config = {
  development: {
    apiUrl: env.REACT_APP_DEV_APIURL,
    apiVersion: env.REACT_APP_DEV_API_VERSION
  },
  staging: {
    apiUrl: env.REACT_APP_STAG_APIURL,
    apiVersion: env.REACT_APP_STAG_API_VERSION
  },
  production: {
    apiUrl: env.REACT_APP_TEST_APIURL,
    apiVersion: env.REACT_APP_PROD_API_VERSION
  }
};

export default config[env.NODE_ENV];
