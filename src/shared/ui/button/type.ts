export type ButtonVariant = "solid" | "outlined";
export type ButtonColor = "primary" | "secondary" | "tertiary" | "danger";
export type ButtonSize = "large" | "medium" | "fullWidth";
export interface BaseButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  rounded?: boolean;
  color?: ButtonColor;
  disabled?: boolean;
}

type ButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  (
    | { children: React.ReactNode; text?: never }
    | { children?: never; text: string }
  );

export default ButtonProps;
