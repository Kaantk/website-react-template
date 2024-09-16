import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://localhost:44316/",
  headers: {
    "Content-Type": "application/json",
  },
});
