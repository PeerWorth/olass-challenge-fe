import { Label2 } from "@/shared/ui/typography/Label";

import { ToastProps } from "../model/type";

const Toast = (props: ToastProps) => {
  return (
    <div className="bg-primary100 mx-auto w-[230px] rounded-full px-4 py-2">
      <Label2 className="truncate text-center font-medium">
        {props.contentType === "money" ? (
          <>
            {props.nickname} 누적 절약 금액{" "}
            <span className="bg-linear-to-r from-[#74DA00] to-[#008FFF] bg-clip-text text-transparent">
              {props.amount.toLocaleString()}원
            </span>{" "}
            달성!
          </>
        ) : (
          <>
            {props.nickName}{" "}
            <span className="bg-linear-to-r from-[#74DA00] to-[#008FFF] bg-clip-text text-transparent">
              {props.badgeName}
            </span>{" "}
            배지 획득!
          </>
        )}
      </Label2>
    </div>
  );
};

export default Toast;
