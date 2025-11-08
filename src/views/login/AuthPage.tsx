"use client";

import { useMutation } from "@tanstack/react-query";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { authQueries } from "@/shared/api/queryFactory/auth";
import { ROUTE_PATH } from "@/shared/constants";
import { Loader } from "@/shared/ui/loader";

const AuthPage = () => {
  const queryString = useSearchParams();
  const router = useRouter();
  const idToken = queryString.get("code");
  const clientId = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
  const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}${ROUTE_PATH.LOGIN_KAKAO}`;

  const { mutateAsync: sendKakaoIdToken } = useMutation(
    authQueries.postKakao(),
  );

  const { mutateAsync: sendKakaoToken } = useMutation(
    authQueries.postKakaoToken(),
  );

  const handleKakaoLogin = async () => {
    try{
      if (!idToken) {
        return router.push(ROUTE_PATH.LANDING);
      }

      if (!clientId || !redirectUri) {
        return router.push(ROUTE_PATH.LANDING);
      }

      const kakaoTokenResponse = await sendKakaoToken({
        grant_type: "authorization_code",
        client_id: clientId,
        redirect_uri: redirectUri,
        code: idToken,
      });

      const { id_token } = kakaoTokenResponse;
  
      const kakaoIdTokenResponse = await sendKakaoIdToken({ idToken: id_token });

      const { accessToken, isNewUser } = kakaoIdTokenResponse;
  
      // 201이라면
      // 새로운 유저라면 토큰 저장 후 signUp 페이지로 이동
      window.Kakao.Auth.setAccessToken(accessToken, true);
  
      if (isNewUser) {
        router.push(ROUTE_PATH.SIGN_UP);
      } else {
        router.push(ROUTE_PATH.HOME);
      }
      // 기존 유저라면 토큰 저장 후 루트 페이지로 이동
    } catch (error) {
      console.error(error);
      // TODO: 다이얼로그 띄우고 에러 보여주기
      router.push(ROUTE_PATH.LANDING);
    }
  }; 

  useEffect(() => {
    if (idToken) {
      handleKakaoLogin();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <Loader />
  );
};

export default AuthPage;
