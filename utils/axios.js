import axios from "axios";

axios.interceptors.request.use(function (config) {
    // Do something before request is sent

    config.headers.Authorization=`Bearer ${localStorage.getItem('token')}`
    config.url=`${import.meta.env.VITE_SERVER_URL}${config.url}`;

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  export const post= (url,data)=> axios.post(url,data);
  export const get = (url)=>axios.get(url);
  export const del = (url)=>axios.delete(url)