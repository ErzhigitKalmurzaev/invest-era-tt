import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

console.log(process.env.REACT_APP_BASE_URL);

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    return {
      ...config,
      headers: {
        ...config.headers,
        "Content-Type": "application/json",
        ...(!accessToken ? {} : { Authorization: `Bearer ${accessToken}` }),
      },
    };
  },
  (error) => {
    return Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    );
  }
);
export default axiosInstance;
