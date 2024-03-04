import baseAxios from "axios";

const axios = baseAxios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/",
});

axios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default axios;
