"use client";

import React from "react";

import { cn } from "@/shared/utils";

interface CaptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const Caption = ({ className, children, ...props }: CaptionProps) => {
  return (
    <p className={cn("", className)} {...props}>
      {children}
    </p>
  );
};

const Caption1 = ({ className, children, ...props }: CaptionProps) => {
  return (
    <Caption
      className={cn(
        "text-xs leading-4 font-bold tracking-[0.0252em]",
        className,
      )}
      {...props}
    >
      {children}
    </Caption>
  );
};

const Caption2 = ({ className, children, ...props }: CaptionProps) => {
  return (
    <Caption
      className={cn(
        "text-[11px] leading-[14px] tracking-[0.0311em]",
        className,
      )}
      {...props}
    >
      {children}
    </Caption>
  );
};

export { Caption1, Caption2 };
