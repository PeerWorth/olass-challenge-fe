export type ButtonVariant = "solid" | "outlined";
export type ButtonColor = "primary" | "secondary" | "tertiary" | "danger";
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
