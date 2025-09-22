"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/shared/ui/button";

const LoginButton = () => {
  const route = useRouter();
  const handleClickLogin = () => route.push("/login");

  return (
    <Button
      variant="solid"
      size="fullWidth"
      color="primary"
      text="로그인하고 절약 챌린지 참여하기"
      rounded
      onClick={handleClickLogin}
    />
  );
};

export default LoginButton;
