import { create } from "zustand";

import { BottomSheetState } from "./type";

const useBottomSheetStore = create<BottomSheetState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
  content: null,
  setContent: (content: React.ReactNode) => set({ content }),
}));

export default useBottomSheetStore;
