"use client";

import React from "react";

import { cn } from "@/shared/utils";

import { Body1, Body2 } from "../typography/Body";
import ButtonVariants from "./ButtonVariants";
import ButtonProps from "./type";

const createTypographyComponent = (size: "large" | "medium") => {
  const typographyMap = {
    large: Body1,
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
    isFullWidth,
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
        isFullWidth && "w-full",
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
