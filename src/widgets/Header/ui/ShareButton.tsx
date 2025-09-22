import shareContent from "../lib/shareContent";
import { IconShare } from "./icons";

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
