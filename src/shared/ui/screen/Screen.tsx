"use client";

import { useDeviceType } from "@/shared/hooks";
import { cn } from "@/shared/utils";

import ScreenVariants from "./ScreenVariants";

interface ScreenProps {
  children: React.ReactNode;
}

const Screen = ({ children }: ScreenProps) => {
  const deviceType = useDeviceType();

  if (!deviceType) return null;

  return <div className={cn(ScreenVariants({ deviceType }))}>{children}</div>;
};

export default Screen;
