import { useEffect, useState } from "react";
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductProps {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}
export const useProduct = ({ product, onChange, value = 0 }: useProductProps) => {
  const [counter, setCounter] = useState(value);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ product, count: newValue });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);


  return { counter, increaseBy };
};
