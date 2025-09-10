"use client";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { theme } from "@/shared/styles";

import { Body1, Body2 } from "../typography/Body";
import ButtonProps from "./type";

const BUTTON_SIZES = {
  large: css`
    padding: 12px 28px;
    border-radius: 12px;
  `,
  medium: css`
    padding: 9px 20px;
    border-radius: 10px;
  `,
};

const BUTTON_VARIANTS = {
  primary: theme.colors.primary500,
  secondary: theme.colors.coolNeutral900,
};

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
    $size = "medium",
    $variant = "primary",
    $rounded,
    ...rest
  } = props;

  const TypographyComponent = createTypographyComponent($size);

  return (
    <CustomButton
      $size={$size}
      $variant={$variant}
      $rounded={$rounded}
      {...rest}
    >
      {children || (
        <TypographyComponent className="text-common100 font-semibold">
          {text}
        </TypographyComponent>
      )}
    </CustomButton>
  );
};

const CustomButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $variant = "primary" }) => BUTTON_VARIANTS[$variant]};
  ${({ $size = "medium" }) => BUTTON_SIZES[$size]}
  ${({ $rounded }) => $rounded && "border-radius: 100px;"}
  &:hover {
    cursor: pointer;
  }
`;

export default Button;
