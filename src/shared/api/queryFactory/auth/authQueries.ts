import { UseMutationOptions, mutationOptions } from "@tanstack/react-query";

import authApi from "./authApi";
import { KakaoParams, KakaoTokenParams } from "./types";

const authQueries = {
  postKakao: (queryOptions?: UseMutationOptions<any, Error, KakaoParams>) =>
    mutationOptions({
      ...queryOptions,
      mutationFn: (params: KakaoParams) => authApi.kakao(params),
    }),
  postKakaoToken: (queryOptions?: UseMutationOptions<any, Error, KakaoTokenParams>) =>
    mutationOptions({
      ...queryOptions,
      mutationFn: (params: KakaoTokenParams) => authApi.kakaoToken(params),
    }),
};

export default authQueries;
