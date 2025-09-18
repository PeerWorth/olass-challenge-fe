import { IconShare } from "@/views/landing/ui/icons";

import shareContent from "../lib/shareContent";

const ShareButton = () => {
  return (
    <IconShare
      className="cursor-pointer"
      onClick={() => {
        shareContent({
          title: "Share this page",
          text: "Share this page",
          url: window.location.href,
        });
      }}
    />
  );
};

export default ShareButton;
