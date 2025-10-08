import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Heading1 } from "@/shared/ui/typography/Heading";

import { STEP_TITLE } from "../model/constants";
import { SignUpStepProps } from "../model/types";

const BirthYear = (props: SignUpStepProps) => {
  const { step, handleChange, onClickReset, goNext } = props;

  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className="flex flex-col gap-y-11">
        <Heading1 className="whitespace-pre-line">
          {STEP_TITLE.birthYear}
        </Heading1>
        <Input
          type="number"
          value={step.birthYear}
          onChange={(e) => handleChange(e, "birthYear")}
          onClickReset={onClickReset}
          unit='년도'
        />
      </div>

      <Button
        className="rounded-[12px] py-3"
        size="fullWidth"
        text="다음"
        disabled={!step.birthYear}
        onClick={goNext}
      />
    </div>
  );
};

export default BirthYear;
