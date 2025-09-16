"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { cn } from "@/shared/utils";

import PortalOverlayProps from "./type";

const PortalOverlay = ({ children, className }: PortalOverlayProps) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.getElementById("portal-overlay");
    setPortalElement(element);
  }, []);

  if (!portalElement) return null;

  return createPortal(
    <div className={cn("bg-overlay absolute h-full w-full", className)}>
      {children}
    </div>,
    portalElement,
  );
};

export default PortalOverlay;
