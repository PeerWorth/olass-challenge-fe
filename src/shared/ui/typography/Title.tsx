"use client";

import React from "react";

import { cn } from "@/shared/utils";

interface TitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const Title = ({ className, children, ...props }: TitleProps) => {
  return (
    <p className={cn("font-bold", className)} {...props}>
      {children}
    </p>
  );
};

const Title1 = ({ className, children, ...props }: TitleProps) => {
  return (
    <Title
      className={cn(
        "text-[36px] leading-[48px] tracking-[-0.027em]",
        className,
      )}
      {...props}
    >
      {children}
    </Title>
  );
};

const Title2 = ({ className, children, ...props }: TitleProps) => {
  return (
    <Title
      className={cn(
        "text-[28px] leading-[38px] tracking-[-0.0236em]",
        className,
      )}
      {...props}
    >
      {children}
    </Title>
  );
};

const Title3 = ({ className, children, ...props }: TitleProps) => {
  return (
    <Title
      className={cn("text-2xl leading-8 tracking-[-0.023em]", className)}
      {...props}
    >
      {children}
    </Title>
  );
};

export { Title1, Title2, Title3 };
