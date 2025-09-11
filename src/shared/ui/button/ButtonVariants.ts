import { cva } from "class-variance-authority";

const ButtonVariants = cva(
  ["flex", "cursor-pointer", "items-center", "justify-center"],
  {
    variants: {
      size: {
        large: ["px-7", "py-3", "rounded-xl"],
        medium: ["px-5", "py-2.5", "rounded-[10px]"],
      },
      variant: {
        solid: "text-common100",
        outlined: "text-common00",
      },
      color: {
        primary: "",
        secondary: "",
        tertiary: "",
        danger: "",
      },
      disabled: {
        true: ["bg-coolNeutral25"],
        false: null,
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        color: "primary",
        className: ["bg-primary500"],
      },
      {
        variant: "solid",
        color: "secondary",
        className: ["bg-common00"],
      },
      {
        variant: "solid",
        color: "tertiary",
        className: ["bg-coolNeutral25"],
      },
      {
        variant: "solid",
        color: "danger",
        className: ["bg-alert"],
      },

      {
        variant: "outlined",
        color: "primary",
        className: ["border", "border-primary500"],
      },
      {
        variant: "outlined",
        color: "secondary",
        className: ["border", "border-common00"],
      },
      {
        variant: "outlined",
        color: "tertiary",
        className: ["border", "border-coolNeutral25"],
      },
      {
        variant: "outlined",
        color: "danger",
        className: ["border", "border-alert"],
      },
      {
        variant: "solid",
        disabled: true,
        className: ["bg-coolNeutral25", "text-coolNeutral200"],
      },
      {
        variant: "outlined",
        disabled: true,
        className: [
          "border-coolNeutral25",
          "bg-common100",
          "text-coolNeutral200",
        ],
      },
    ],
    defaultVariants: {
      variant: "solid",
      color: "primary",
      size: "medium",
    },
  },
);

export default ButtonVariants;
