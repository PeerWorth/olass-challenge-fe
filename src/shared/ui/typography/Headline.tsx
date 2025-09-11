"use client";

import React from "react";

import { cn } from "@/shared/utils";

interface HeadlineProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const Headline = ({ className, children, ...props }: HeadlineProps) => {
  return (
    <p className={cn("font-bold", className)} {...props}>
      {children}
    </p>
  );
};

const Headline1 = ({ className, children, ...props }: HeadlineProps) => {
  return (
    <Headline
      className={cn("text-lg leading-[26px] tracking-[-0.0002em]", className)}
      {...props}
    >
      {children}
    </Headline>
  );
};

const Headline2 = ({ className, children, ...props }: HeadlineProps) => {
  return (
    <Headline className={cn("text-[17px] leading-6", className)} {...props}>
      {children}
    </Headline>
  );
};

export { Headline1, Headline2 };
