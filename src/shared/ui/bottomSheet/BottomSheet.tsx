import { PortalOverlay } from '@/shared/ui/portalOverlay';
import { cn } from "@/shared/utils";


const BottomSheet = ({ children }: { children: React.ReactNode }) => {
  return (
    <PortalOverlay className="flex items-end justify-center px-5 pb-5">
      <div className={cn("bg-common100 w-full rounded-3xl p-5")}>
        {children}
      </div>
    </PortalOverlay>
  );
};

export default BottomSheet;
