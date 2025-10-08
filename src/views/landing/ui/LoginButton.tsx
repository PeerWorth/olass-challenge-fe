"use client";

import { useRouter } from "next/navigation";

import { ROUTE_PATH } from "@/shared/constants";
import { Button } from "@/shared/ui/button";

const LoginButton = () => {
  const route = useRouter();
  const handleClickLogin = () => route.push(ROUTE_PATH.LOGIN);

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
