import { useState } from "react";

interface Props {
  initialValue?: string | number;
}

const useInputChange = (props?: Props) => {
  const { initialValue = "" } = props || {};
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const resetValue = () => setValue(initialValue);

  return { value, handleChange, resetValue };
};

export default useInputChange;
