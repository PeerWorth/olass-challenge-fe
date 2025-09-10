"use client";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { theme } from "@/shared/styles";

import { Body1, Body2 } from "../typography/Body";
import { BUTTON_COLORS } from "./constants";
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
    $variant = "solid",
    $color = "primary",
    $rounded,
    $fullWidth,
    disabled,
    ...rest
  } = props;

  const TypographyComponent = createTypographyComponent($size);

  const getTextColor = () => {
    if (disabled) return "text-coolNeutral200";
    if ($color === "secondary" || $variant === "outlined")
      return "text-common00";
    return "text-common100";
  };

  return (
    <CustomButton
      $size={$size}
      $rounded={$rounded}
      $variant={$variant}
      $color={$color}
      $fullWidth={$fullWidth}
      disabled={disabled}
      {...rest}
    >
      {children || (
        <TypographyComponent className={`font-semibold ${getTextColor()}`}>
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
  ${({ $size = "medium" }) => BUTTON_SIZES[$size]}
  ${({ $rounded }) => $rounded && "border-radius: 100px;"}
  ${({ $variant, $color = "primary" }) => css`
    ${$variant === "solid" &&
    css`
      background-color: ${BUTTON_COLORS[$color]};
    `}

    ${$variant === "outlined" &&
    css`
      border: 1px solid ${BUTTON_COLORS[$color]};
      background-color: ${theme.colors.common100};
    `}
  `}
  ${({ $fullWidth }) => $fullWidth && "width: 100%;"}
  &:hover {
    cursor: pointer;
  }
`;

export default Button;
