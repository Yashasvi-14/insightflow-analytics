import axios from "axios";

const api = axios.create({
  baseURL: "https://insightflow-analytics.onrender.com/api",
});

export default api;