"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { cn } from "@/shared/utils";

import PortalOverlayProps from "./type";

const PortalOverlay = ({
  children,
  className,
  onClose,
}: PortalOverlayProps) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  const handleClick = () => onClose?.();

  useEffect(() => {
    const element = document.getElementById("portal-overlay");
    setPortalElement(element);

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!portalElement) return null;

  return createPortal(
    <div
      className={cn("bg-overlay absolute h-full w-full", className)}
      onClick={handleClick}
    >
      <div className="w-full" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    portalElement,
  );
};

export default PortalOverlay;
