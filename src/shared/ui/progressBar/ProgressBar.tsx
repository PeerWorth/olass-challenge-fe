import { cn } from "@/shared/utils";

import { ProgressBarProps } from "./type";

const ProgressBar = (props: ProgressBarProps) => {
  const { progressPercent, className } = props;

  return (
    <div className={cn("bg-coolNeutral25 h-0.5 w-full", className)}>
      <div
        className="bg-primary500 h-full"
        style={{ width: `${progressPercent}%` }}
      />
    </div>
  );
};

export default ProgressBar;
