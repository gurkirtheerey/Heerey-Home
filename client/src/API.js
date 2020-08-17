import axios from "axios";

const api = axios.create({
  baseURL: "https://heerey-home.herokuapp.coms/api",
  responseType: "json",
});

export default api;
