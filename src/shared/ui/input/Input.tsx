"use client";

import React, { useState } from "react";

import { IconCircleX } from "@/shared/assets/icons";
import { cn } from "@/shared/utils";

import { Body1 } from "../typography/Body";
import { Caption1 } from "../typography/Caption";
import { Label1 } from "../typography/Label";
import { ContainerVariants } from "./InputVariants";
import InputProps from "./type";

const Input = (props: InputProps) => {
  const {
    className,
    title,
    caption,
    unit,
    disabled,
    placeholder = "텍스트를 입력해주세요",
    onClickReset,
    ...rest
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const handleIsFocused = () => setIsFocused(!isFocused);

  return (
    <div className="flex w-[335px] flex-col gap-y-2">
      {title && <Label1 className="font-semibold">{title}</Label1>}
      <div className="flex items-center gap-x-2.5">
        <div className={cn(ContainerVariants({ isFocused, disabled }))}>
          <input
            className={cn("flex flex-1 focus:outline-none", className)}
            disabled={disabled}
            onFocus={handleIsFocused}
            onBlur={handleIsFocused}
            placeholder={placeholder}
            {...rest}
          />
          <IconCircleX className="cursor-pointer" onClick={onClickReset} />
        </div>
        {unit && <Body1 className="font-medium">{unit}</Body1>}
      </div>
      {caption && (
        <Caption1 className="text-coolNeutral400 font-normal">
          {caption}
        </Caption1>
      )}
    </div>
  );
};

export default Input;
