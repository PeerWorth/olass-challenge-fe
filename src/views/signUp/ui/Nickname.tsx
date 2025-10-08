"use client";

import { useState } from "react";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Heading1 } from "@/shared/ui/typography/Heading";

import hasSpecialCharacter from "../lib/hasSpecialCharacter";
import { NICKNAME_ERROR_CAPTION, STEP_TITLE } from "../model/constants";
import { NicknameErrorType, SignUpStepProps } from "../model/types";

const Nickname = (props: SignUpStepProps) => {
  const { step, handleChange, onClickReset, goNext } = props;
  const [errorType, setErrorType] = useState<NicknameErrorType>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    handleChange(e, "nickname");

    if (value.length < 2 || value.length > 8) {
      setErrorType("length");
      return;
    }
    if (hasSpecialCharacter(value)) {
      setErrorType("specialCharacter");
      return;
    }
    setErrorType(null);
  };

  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className="flex flex-col gap-y-11">
        <Heading1 className="whitespace-pre-line">
          {STEP_TITLE.nickname}
        </Heading1>
        <Input
          value={step.nickname}
          onChange={onChange}
          onClickReset={onClickReset}
          error={!!errorType}
          caption={errorType ? NICKNAME_ERROR_CAPTION[errorType] : ""}
        />
      </div>

      <Button
        className="rounded-[12px] py-3"
        size="fullWidth"
        text="다음"
        disabled={!step.nickname || !!errorType}
        onClick={goNext}
      />
    </div>
  );
};

export default Nickname;
