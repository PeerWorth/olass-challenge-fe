import * as Sentry from "@sentry/nextjs";
import axios, { AxiosError } from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    console.log(error);
    Sentry.captureException(error);

    // if (
    //   error.response &&
    //   error.response.status >= 500 &&
    //   error.response.status < 600
    // ) {
    //   // 5xx 에러만 Sentry로 전송
    //   Sentry.captureException(error);
    // }
    // if (error.response?.code === 401) {
    //   localStorage.removeItem("token");
    //   window.location.href = "/login";
    // }
    return Promise.reject(error);
  },
);

export default apiClient;
