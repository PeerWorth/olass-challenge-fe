"use client";

import React from "react";

import { cn } from "@/shared/utils";

interface BodyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const Body = ({ className, children, ...props }: BodyProps) => {
  return (
    <p className={cn("font-bold", className)} {...props}>
      {children}
    </p>
  );
};

const Body1 = ({ className, children, ...props }: BodyProps) => {
  return (
    <Body
      className={cn("text-base leading-6 tracking-[0.0057em]", className)}
      {...props}
    >
      {children}
    </Body>
  );
};

const Body2 = ({ className, children, ...props }: BodyProps) => {
  return (
    <Body
      className={cn("text-[15px] leading-5 tracking-[0.0096em]", className)}
      {...props}
    >
      {children}
    </Body>
  );
};

export { Body1, Body2 };
