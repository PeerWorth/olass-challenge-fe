import { cva } from "class-variance-authority";

const genderVariants = cva(
  [
    "rounded-[20px]",
    "px-10",
    "py-3",
    "flex",
    "flex-1",
    "flex-col",
    "gap-y-3",
    "border",
    "items-center",
  ],
  {
    variants: {
      selected: {
        true: ["border-primary500", "bg-primary100"],
        false: ["border-coolNeutral50"],
      },
    },
  },
);

export default genderVariants;
