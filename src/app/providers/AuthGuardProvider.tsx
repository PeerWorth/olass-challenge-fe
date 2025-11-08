"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import { ROUTE_PATH } from "@/shared/constants/routeConfig";
import useAuth from "@/shared/hooks/useAuth";

interface AuthGuardProps {
  children: React.ReactNode;
}

// 공개 경로 정의
const PUBLIC_ROUTES = [
  ROUTE_PATH.LANDING,
  ROUTE_PATH.LOGIN,
  ROUTE_PATH.SIGN_UP,
  ROUTE_PATH.LOGIN_KAKAO,
] as const;

const AuthGuardProvider = ({ children }: AuthGuardProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { checkIsAuthorized } = useAuth();

  useEffect(() => {
    const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

    if (!checkIsAuthorized() && !isPublicRoute) {
      router.replace(ROUTE_PATH.LANDING);
    }
  }, [checkIsAuthorized, router, pathname]);

  return <>{children}</>;
};

export default AuthGuardProvider;
