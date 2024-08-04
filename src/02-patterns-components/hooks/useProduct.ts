import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

interface useProductProps {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}
export const useProduct = ({ product, onChange, value = 0, initialValues }: useProductProps) => {
  const [counter, setCounter] = useState(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }
    setCounter(newValue);
    onChange && onChange({ product, count: newValue });
  };

  const reset = () => setCounter(initialValues?.count || value);
  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);


  return {
    counter,
    increaseBy,
    isMaxCountReached: !!initialValues?.maxCount && counter === initialValues?.maxCount,
    maxCount: initialValues?.maxCount,
    reset
  };
};
