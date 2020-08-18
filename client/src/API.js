import axios from "axios";

const api = axios.create({
  // PROD
  // baseURL: "https://heerey-home.herokuapp.com/api",
  // DEV
  baseURL: "http://localhost:5000/api",
  responseType: "json",
});

export default api;
