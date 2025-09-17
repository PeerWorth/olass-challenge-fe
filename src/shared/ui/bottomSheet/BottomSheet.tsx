import { useBottomSheet } from "@/shared/hooks";
import { PortalOverlay } from "@/shared/ui/portalOverlay";
import { cn } from "@/shared/utils";

const BottomSheet = ({ children }: { children: React.ReactNode }) => {
  const { handleClose } = useBottomSheet();
  return (
    <PortalOverlay
      className="flex items-end justify-center px-5 pb-5"
      onClose={handleClose}
    >
      <div className={cn("bg-common100 w-full rounded-3xl px-5 pt-2 pb-5")}>
        <div className="mx-auto h-[5px] w-10 rounded-full bg-[#70737C29]" />
        {children}
      </div>
    </PortalOverlay>
  );
};

export default BottomSheet;
