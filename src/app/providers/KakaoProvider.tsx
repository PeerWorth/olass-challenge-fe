"use client";

import Script from "next/script";

const KakaoProvider = () => {
  const handleKakaoInit = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
  };

  return (
    <Script
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.8/kakao.min.js"
      integrity={process.env.NEXT_PUBLIC_KAKAO_INTEGRITY_VALUE}
      onLoad={handleKakaoInit}
      crossOrigin="anonymous"
    />
  );
};

export default KakaoProvider;
