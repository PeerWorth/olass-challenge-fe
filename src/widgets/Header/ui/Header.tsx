"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { LogoHorizontal } from "@/shared/assets/images";
import { ROUTE_PATH } from "@/shared/constants";

import { HeaderProps } from "../model/type";
import ShareButton from "./ShareButton";

const Header = ({
  showShareButton,
  // showProfileButton,
  backgroundColor = "transparent",
}: HeaderProps) => {
  const router = useRouter();

  return (
    <div
      className={`sticky top-0 flex items-center justify-between px-5 py-4 bg-${backgroundColor}`}
    >
      <Image
        width={72}
        height={20}
        src={LogoHorizontal}
        alt="logo"
        className="cursor-pointer"
        onClick={() => router.push(ROUTE_PATH.HOME)}
      />
      {showShareButton && <ShareButton />}
      {/* {showProfileButton && <ProfileButton />} */}
    </div>
  );
};

export default Header;
