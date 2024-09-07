// apiClient.js
import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.example.com", // .env'den gelen URL
  headers: {
    "Content-Type": "application/json",
  },
});
