import { cva } from "class-variance-authority";

export const ContainerVariants = cva(
  [
    "border-coolNeutral100",
    "flex",
    "flex-1",
    "gap-x-3",
    "rounded-xl",
    "border",
    "p-3",
    "bg-common100",
  ],
  {
    variants: {
      isFocused: { true: ["border-focused"] },
      disabled: { true: ["bg-disabled"] },
      error: { true: ["border-alert"] },
    },
  },
);

export const InputVariants = cva("", {
  variants: {
    disabled: { trie: ["placeholder-coolNeutral100"] },
  },
});

export const CaptionVariants = cva("text-coolNeutral400 font-normal", {
  variants: {
    error: { true: ["text-alert"] },
  },
});
