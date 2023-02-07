import axios from "axios";

const api = axios.create({
  baseURL: "https://api.weather.gov/",
});

export default api;