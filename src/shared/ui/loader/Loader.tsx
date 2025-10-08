import { PortalOverlay } from "../portalOverlay";
import { Body1 } from "../typography/Body";

const Loader = () => {
  return (
    <PortalOverlay className="flex">
      <div className="flex h-full">
        <div className="border-primary500 m-auto flex h-30 w-30 items-center justify-center rounded-full border-10">
          <Body1 className="text-common100">로딩 중...</Body1>
        </div>
      </div>
    </PortalOverlay>
  );
};

export default Loader;
