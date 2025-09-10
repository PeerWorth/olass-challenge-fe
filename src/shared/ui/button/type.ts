export interface BaseButtonProps {
  $size?: "large" | "medium";
  $variant?: "primary" | "secondary";
  $rounded?: boolean; 
}

type ButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  (
    | { children: React.ReactNode; text?: never }
    | { children?: never; text: string }
  );

export default ButtonProps;
