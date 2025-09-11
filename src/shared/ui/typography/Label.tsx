"use client";

import React from "react";

import { cn } from "@/shared/utils";

interface LabelProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const Label = ({ className, children, ...props }: LabelProps) => {
  return (
    <p className={cn("", className)} {...props}>
      {children}
    </p>
  );
};

const Label1 = ({ className, children, ...props }: LabelProps) => {
  return (
    <Label
      className={cn(
        "text-sm leading-5 font-medium tracking-[0.0145em]",
        className,
      )}
      {...props}
    >
      {children}
    </Label>
  );
};

const Label2 = ({ className, children, ...props }: LabelProps) => {
  return (
    <Label
      className={cn(
        "text-[13px] leading-[18px] font-bold tracking-[0.0194em]",
        className,
      )}
      {...props}
    >
      {children}
    </Label>
  );
};

export { Label1, Label2 };
