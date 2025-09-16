import { useState } from "react";

interface Props<T extends Record<string, any>> {
  initialValue: T;
}

const useInputObjectChange = <T extends Record<string, any>>(
  props: Props<T>,
) => {
  const { initialValue } = props;
  const [value, setValue] = useState<T>(initialValue);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof T,
  ) => {
    setValue((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const resetValue = () => setValue(initialValue);

  return { value, handleChange, resetValue };
};

export default useInputObjectChange;
