import { BUTTON_COLORS } from "./constants";

export type ButtonVariant = "solid" | "outlined";
export type ButtonColor = keyof typeof BUTTON_COLORS;
export interface BaseButtonProps {
  $size?: "large" | "medium";
  $variant?: ButtonVariant;
  $rounded?: boolean;
  $color?: ButtonColor;
  disabled?: boolean;
  $fullWidth?: boolean;
}

type ButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  (
    | { children: React.ReactNode; text?: never }
    | { children?: never; text: string }
  );

export default ButtonProps;
