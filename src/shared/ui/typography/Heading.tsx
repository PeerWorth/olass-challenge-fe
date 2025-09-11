"use client";

import React from "react";

import { cn } from "@/shared/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const Heading = ({ className, children, ...props }: HeadingProps) => {
  return (
    <p className={cn("font-bold", className)} {...props}>
      {children}
    </p>
  );
};

const Heading1 = ({ className, children, ...props }: HeadingProps) => {
  return (
    <Heading
      className={cn(
        "text-[22px] leading-[30px] tracking-[-0.0194em]",
        className,
      )}
      {...props}
    >
      {children}
    </Heading>
  );
};

const Heading2 = ({ className, children, ...props }: HeadingProps) => {
  return (
    <Heading
      className={cn("text-xl leading-7 tracking-[-0.012em]", className)}
      {...props}
    >
      {children}
    </Heading>
  );
};

export { Heading1, Heading2 };
