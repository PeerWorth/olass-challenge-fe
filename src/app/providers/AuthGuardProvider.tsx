"use client";

import { redirect, RedirectType } from "next/navigation";

import { ROUTE_PATH } from "@/shared/constants/routeConfig";
import useAuth from "@/shared/hooks/useAuth";

interface AuthGuardProps {
  children: React.ReactNode;
}



const AuthGuardProvider = ({ children }: AuthGuardProps) => {
  const { checkIsAuthorized } = useAuth();

  if (!checkIsAuthorized()) { 
    redirect(ROUTE_PATH.LANDING, RedirectType.replace);
  }

  return <>{children}</>;
};

export default AuthGuardProvider;
