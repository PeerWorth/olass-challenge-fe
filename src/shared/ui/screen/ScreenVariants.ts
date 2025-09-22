import { cva } from "class-variance-authority";

const ScreenVariants = cva(["overflow-y-auto", "flex", "flex-col"], {
  variants: {
    deviceType: {
      desktop: [
        "w-[375px]",
        "h-[812px]",
        "fixed",
        "inset-0",
        "m-auto",
        "border",
        "border-black",
      ],
      mobile: ["w-dvw", "h-dvh"],
    },
  },
});

export default ScreenVariants;
