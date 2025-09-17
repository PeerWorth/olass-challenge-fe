import { cva } from "class-variance-authority";

const ScreenVariants = cva(["overflow-auto"], {
  variants: {
    deviceType: {
      desktop: ["w-[375px]", "h-[812px]", "fixed", "inset-0", "m-auto"],
      mobile: ["w-dvw", "h-dvh"],
    },
  },
});

export default ScreenVariants;
