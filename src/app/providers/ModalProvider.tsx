"use client";

import { useBottomSheetStore } from "@/shared/stores";
import { BottomSheet } from "@/shared/ui/bottomSheet";

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const bottomSheetStore = useBottomSheetStore();
  return (
    <>
      {children}
      {bottomSheetStore.isOpen && (
        <BottomSheet>{bottomSheetStore.content}</BottomSheet>
      )}
    </>
  );
};

export default ModalProvider;
