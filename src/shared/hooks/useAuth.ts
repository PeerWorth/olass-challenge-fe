"use client";

const useAuth = () => {
  const checkIsAuthorized = () => {

    if (typeof window === "undefined") return false;
    if (!window.Kakao) return false;
    if (!window.Kakao.Auth) return false;

    const kakaoAuth = window.Kakao.Auth.getAccessToken();

    console.log(kakaoAuth);
    if (!kakaoAuth) return false;

    return true;
  }

  return {
    checkIsAuthorized,
  };
}

export default useAuth;