import { IconChevronLeft } from "@/shared/assets/icons";
import { Label1 } from "@/shared/ui/typography/Label";
import { cn } from "@/shared/utils";

import { PreviousButtonProps } from "../model/types";

const PreviousButton = (props: PreviousButtonProps) => {
  const { onClick, className } = props;

  return (
    <div
      className={cn("flex w-fit items-center gap-x-0.5", className)}
      onClick={onClick}
    >
      <IconChevronLeft />
      <Label1 className="text-coolNeutral300">이전</Label1>
    </div>
  );
};

export default PreviousButton;
