import axios from "axios";
require("dotenv").config();

const axiosApiIntances = axios.create({
  baseURL: "http://www.omdbapi.com?apikey=b45c11ae&",
});

// Add a request interceptor
axiosApiIntances.interceptors.request.use(

);

// Add a response interceptor
axiosApiIntances.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
);

export default axiosApiIntances;
