import { Label2 } from "@/shared/ui/typography/Label";

const Toast = () => {
  return (
    <div className="bg-primary100 mx-auto w-[230px] rounded-full px-4 py-2">
      <Label2 className="truncate text-center font-medium">
        올*님 누적 절약 금액 50,000원 달성!
      </Label2>
    </div>
  );
};

export default Toast;
