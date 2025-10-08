import Image from "next/image";

import { Button } from "@/shared/ui/button";
import { Heading1 } from "@/shared/ui/typography/Heading";
import { Headline1 } from "@/shared/ui/typography/Headline";

import { STEP_TITLE } from "../model/constants";
import { SignUpStepProps } from "../model/types";
import genderVariants from "./genderVariants";
import ImageFemale from "./images/female.png";
import ImageMale from "./images/male.png";

const Gender = (props: SignUpStepProps) => {
  const { step, handleChange, goNext } = props;

  const handleGenderSelect = (gender: "male" | "female") => {
    const fakeEvent = {
      target: { value: gender },
    } as React.ChangeEvent<HTMLInputElement>;

    handleChange(fakeEvent, "gender");
  };

  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className="flex flex-col gap-y-11">
        <Heading1 className="whitespace-pre-line">{STEP_TITLE.gender}</Heading1>
        <div className="flex gap-x-4">
          <div
            className={genderVariants({ selected: step.gender === "male" })}
            onClick={() => handleGenderSelect("male")}
          >
            <Image width={59} height={77} src={ImageMale.src} alt="male" />
            <Headline1>남자</Headline1>
          </div>
          <div
            className={genderVariants({ selected: step.gender === "female" })}
            onClick={() => handleGenderSelect("female")}
          >
            <Image width={55} height={77} src={ImageFemale.src} alt="female" />
            <Headline1>여자</Headline1>
          </div>
        </div>
      </div>

      <Button
        className="rounded-[12px] py-3"
        size="fullWidth"
        text="완료"
        disabled={!step.birthYear}
        onClick={goNext}
      />
    </div>
  );
};

export default Gender;
