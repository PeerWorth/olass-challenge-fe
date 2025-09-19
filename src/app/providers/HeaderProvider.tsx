"use client";

import { usePathname } from "next/navigation";

import { Header } from "@/widgets/Header";

import { ROUTE_CONFIG } from "@/shared/constants";

const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const routeConfig = ROUTE_CONFIG[pathname];
  return (
    <>
      {routeConfig?.showHeader && (
        <Header
          showShareButton={routeConfig?.showShareButton}
          showProfileButton={routeConfig?.showProfileButton}
          backgroundColor={routeConfig?.backgroundColor}
        />
      )}
      <div className="flex h-full flex-col">{children}</div>
    </>
  );
};

export default HeaderProvider;
