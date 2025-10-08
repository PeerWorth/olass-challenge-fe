import { UseMutationOptions, mutationOptions } from "@tanstack/react-query";

import authApi from "./authApi";
import { KakaoParams } from "./types";

const authQueries = {
  postKakao: (queryOptions?: UseMutationOptions<any, Error, KakaoParams>) =>
    mutationOptions({
      ...queryOptions,
      mutationFn: (params: KakaoParams) => authApi.kakao(params),
    }),
};

export default authQueries;
