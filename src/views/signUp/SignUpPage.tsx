"use client";

import { useInputObjectChange, useStep } from "@/shared/hooks";
import { Button } from "@/shared/ui/button";
import { ProgressBar } from "@/shared/ui/progressBar";

import { SignUpState } from "./model/types";
import BirthYear from "./ui/BirthYear";
import Gender from "./ui/Gender";
import Nickname from "./ui/Nickname";
import PreviousButton from "./ui/PreviousButton";

const INITIAL_VALUE: SignUpState = {
  nickname: "",
  birthYear: "",
  gender: "",
};

const SignUpPage = () => {
  const { value, handleChange, resetValue } = useInputObjectChange({
    initialValue: INITIAL_VALUE,
  });

  const { goBack, goNext, currentStep } = useStep({
    steps: value,
    onComplete: () => {
      console.log(value);
    },
  });

  const progressPercent = () => {
    const filledStepCount = Object.keys(value).filter(
      (key) => value[key as keyof SignUpState],
    ).length;

    return (filledStepCount / Object.keys(value).length) * 100;
  };

  const STEP_COMPONENTS: Record<keyof SignUpState, React.ReactNode> = {
    nickname: (
      <Nickname
        goNext={goNext}
        step={value}
        handleChange={handleChange}
        onClickReset={resetValue}
      />
    ),
    birthYear: (
      <BirthYear
        goNext={goNext}
        step={value}
        handleChange={handleChange}
        onClickReset={resetValue}
      />
    ),
    gender: <Gender goNext={goNext} step={value} handleChange={handleChange} />,
  };

  return (
    <div className="bg-login-background flex flex-1 px-5 pt-4 pb-6">
      <div className="bg-common100 flex flex-1 flex-col rounded-3xl p-5">
        <PreviousButton onClick={goBack} />
        <ProgressBar
          className="mt-[18px] mb-6"
          progressPercent={progressPercent()}
        />

        {STEP_COMPONENTS[currentStep]}
      </div>
    </div>
  );
};

export default SignUpPage;
