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
  ],
  {
    variants: {
      isFocused: { true: ["border-focused"] },
      disabled: { true: ["bg-disabled"] },
    },
  },
);

export const InputVariants = cva("", {
  variants: {
    disabled: { trie: ["placeholder-coolNeutral100"] },
  },
});
