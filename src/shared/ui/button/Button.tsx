"use client";

import React from "react";

import { cn } from "@/shared/utils";

import { Body1, Body2 } from "../typography/Body";
import ButtonVariants from "./ButtonVariants";
import ButtonProps, { ButtonSize } from "./type";

const createTypographyComponent = (size: ButtonSize) => {
  const typographyMap = {
    large: Body1,
    fullWidth: Body1,
    medium: Body2,
  };

  return typographyMap[size];
};

const Button = (props: ButtonProps) => {
  const {
    text,
    children,
    size = "medium",
    variant,
    color,
    rounded,
    disabled,
    className,
    ...rest
  } = props;

  const TypographyComponent = createTypographyComponent(size);

  return (
    <button
      className={cn(
        ButtonVariants({ size, variant, disabled, color }),
        rounded && "rounded-full",
        className,
      )}
      disabled={disabled}
      {...rest}
    >
      {children || (
        <TypographyComponent className={cn("font-semibold")}>
          {text}
        </TypographyComponent>
      )}
    </button>
  );
};

export default React.memo(Button);
