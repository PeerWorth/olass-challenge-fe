import useBottomSheetStore from "../stores/useBottomSheetStore";

const useBottomSheet = () => {
  const { setIsOpen, setContent } = useBottomSheetStore();

  const handleOpen = (content: React.ReactNode) => {
    setContent(content);
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  return { handleOpen, handleClose };
};

export default useBottomSheet;
