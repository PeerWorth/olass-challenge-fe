interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  caption?: string;
  unit?: string;
  onClickReset?: () => void;
}

export default InputProps;
