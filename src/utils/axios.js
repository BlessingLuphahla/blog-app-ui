import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api"
    : "https://blog-app-api-7q63.onrender.com/api";

const http = axios.create({
  baseURL: BASE_URL,
});

export default http;
