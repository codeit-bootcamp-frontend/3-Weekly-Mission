import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/",
  headers: {
    "Content-Type": "application/json",
    withCredentials: true,
  },
});

axiosInstance.interceptors.request.use((config) => {
  if (!config.headers) return config;
  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken && config.headers) {
      config.headers["Authorization"] = accessToken;
    }
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.config && error.response && error.response.status === 401) {
      error.config._retry = true;
      const refreshToken = localStorage.getItem("refreshToken");
      error.config.headers.RefreshToken = `${refreshToken}`;
      return axios
        .get(`https://bootcamp-api.codeit.kr/docs/linkbrary/v1/auth/`, {
          headers: {
            RefreshToken: `${refreshToken}`,
            "Content-Type": "application/json",
            withCredentials: true,
          },
        })
        .then(async (response) => {
          if (response.status === 200 && response.data.accessToken) {
            localStorage.setItem("accessToken", response.data.accessToken);
            const accessToken = localStorage.getItem("accessToken");
            error.config.headers["Authorization"] = `${accessToken}`;
            return axiosInstance(error.config);
          }
        });
    }
    return Promise.reject(error);
  }
);
