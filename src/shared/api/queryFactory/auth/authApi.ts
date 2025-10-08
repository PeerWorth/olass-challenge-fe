import apiClient from "../../apiClient";
import { KakaoParams } from "./types";

const authApi = {
  kakao: async (params: KakaoParams) => {
    const res = await apiClient.post("/api/auth/v1/kakao", params);

    return res.data;
  },
};

export default authApi;
