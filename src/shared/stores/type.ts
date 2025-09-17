export interface BottomSheetState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  content: React.ReactNode;
  setContent: (content: React.ReactNode) => void;
}
