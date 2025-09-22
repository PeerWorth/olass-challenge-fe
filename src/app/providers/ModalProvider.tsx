"use client";

import { useBottomSheetStore } from "@/shared/stores";
import { BottomSheet } from "@/shared/ui/bottomSheet";

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, content } = useBottomSheetStore();

  return (
    <>
      {children}
      {isOpen && <BottomSheet>{content}</BottomSheet>}
    </>
  );
};

export default ModalProvider;
