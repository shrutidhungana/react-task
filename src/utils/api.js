import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://eyebrowapi.softbenz.com.np/api",
  headers: {
    "Content-Type": "application/json",
    // Add additional default headers or token authorization here if needed
  },
});

// Interceptors for handling responses and errors
baseApi.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally (optional)
    return Promise.reject(error);
  }
);

export default baseApi;
