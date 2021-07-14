/*
 * =====================================================================
 * ----------------------- API SERVICES -----------------------
 * ------------------- Created by Umer bin Siddique --------------------
 * -------------- To setup axios instance for API calling --------------
 * =====================================================================
 * */

import Axios from 'axios';

import storage from 'helpers/storage';

import responseStatus from 'helpers/responseStatus';

import config from 'config';

/**
 * @name @ApiService
 * @description Default Api Service for Auth and Defaul Queries
 * */

/* General ApiServices requests and configurations */

/** Creating Axios instance */
const instance = Axios.create({
  baseURL: config.apiUrl + config.apiVersion
});

const ApiServices = {
  instance,
  /**
   * @name @init
   * @description init axios interceptor on entry point and set/remove auth on app load
   **/
  init() {
    instance.interceptors.response.use(
      function (response) {
        // Do something with response data
        return response;
      },
      function (error) {
        if (error?.response?.status === responseStatus.UNAUTHORIZED) {
          // Do something when unauthorized
        }
        // Do something with response error
        return Promise.reject(error);
      }
    );

    /* Setting Auth Header*/
    if (JSON.parse(storage.getItem('Auth'))) {
      instance.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(
        storage.getItem('Auth')
      )}`;
    }
  },

  /* General query for get request */
  query(resource, params) {
    return instance.get(resource, params).catch(error => {
      throw new Error(`ApiServices Error: ${error}`);
    });
  },

  /* General get request */
  get(resource, headers) {
    return instance.get(resource, {
      headers
    });
  },

  /* Get request with params*/
  getWithParams(resource, params) {
    return instance.get(resource, params).catch(error => {
      throw new Error(`Get ApiServices ${error}`);
    });
  },

  /* General post request */
  post(resource, params) {
    return instance.post(resource, params).catch(error => {
      throw new Error(`Post ApiServices ${error}`);
    });
  },

  /* General put request */
  put(resource, params) {
    return instance.put(resource, params).catch(error => {
      throw new Error(`Put ApiServices ${error}`);
    });
  },

  /* General delete request */
  delete(resource, params) {
    return instance.delete(`${resource}/${params}`).catch(error => {
      throw new Error(`Delete ApiServices ${error}`);
    });
  },

  dataWrapper(data, status) {
    // data wrapper will be removed if WebApi project will send data in ideal way. with status code/data/message etc..
    switch (status) {
      case 'success':
        return {
          status: data.status || status,
          code: data.code || 200,
          data: data,
          message: data.message || 'success'
        };
      case 'error':
        return {
          status: data.status || status,
          code: data.code || 400,
          data: data,
          message: data.message || 'error'
        };
      default:
        return {
          status: 'error',
          code: 400,
          data: null,
          message: 'error'
        };
    }
  }
};

export default ApiServices;
