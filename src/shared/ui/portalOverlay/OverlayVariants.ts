import { cva } from "class-variance-authority";

const OverlayVariants = cva(
  ["bg-overlay", "absolute", "h-full", "w-full", "m-auto"],
  {
    variants: {
      deviceType: {
        desktop: [
          "fixed",
          "inset-0",
          "w-[375px]",
          "h-[812px]",
          "m-auto",
          "z-10",
        ],
        mobile: ["w-dvw", "h-dvh"],
      },
    },
  },
);

export default OverlayVariants;
