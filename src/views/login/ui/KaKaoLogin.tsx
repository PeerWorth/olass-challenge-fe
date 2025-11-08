"use client";

import { ROUTE_PATH } from "@/shared/constants";
import { Body1 } from "@/shared/ui/typography/Body";

import KakaoLogo from "./icons/kakao-logo.svg";

const KaKaoLogin = () => {
  const handleKakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: `${process.env.NEXT_PUBLIC_APP_URL}${ROUTE_PATH.LOGIN_KAKAO}`,
    });
  };

  return (
    <button
      className="bg-kakao flex items-center justify-center gap-x-2 rounded-xl px-11 py-[14px]"
      onClick={handleKakaoLogin}
    >
      <KakaoLogo />
      <Body1 className="font-semibold">카카오로 3초만에 시작하기</Body1>
    </button>
  );
};

export default KaKaoLogin;
