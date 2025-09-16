interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  caption?: string;
  unit?: string;
  error?: boolean;
  onClickReset?: () => void;
}

export default InputProps;
