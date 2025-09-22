import Image from "next/image";

import { LogoHorizontal } from "@/shared/assets/images";

import { HeaderProps } from "../model/type";
import ShareButton from "./ShareButton";

const Header = ({
  showShareButton,
  showProfileButton,
  backgroundColor = "transparent",
}: HeaderProps) => {
  return (
    <div
      className={`sticky top-0 flex items-center justify-between px-5 py-3.5 bg-${backgroundColor}`}
    >
      <Image
        width={72}
        height={20}
        src={LogoHorizontal}
        alt="logo"
        className="cursor-pointer"
      />
      {showShareButton && <ShareButton />}
      {/* {showProfileButton && <ProfileButton />} */}
    </div>
  );
};

export default Header;
