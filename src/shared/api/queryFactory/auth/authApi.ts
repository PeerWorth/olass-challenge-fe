import axios from "axios";
import apiClient from "../../apiClient";
import { KakaoParams, KakaoResponse, KakaoTokenParams, KakaoTokenResponse } from "./types";




const authApi = {
  kakao: async (params: KakaoParams) => {
    const res = await apiClient.post<KakaoResponse>("/api/auth/v1/kakao", params);

    return res.data;
  },
  kakaoToken: async (params: KakaoTokenParams) => {
    const res = await axios.post<KakaoTokenResponse>("https://kauth.kakao.com/oauth/token", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return res.data;
  }
};

export default authApi;
