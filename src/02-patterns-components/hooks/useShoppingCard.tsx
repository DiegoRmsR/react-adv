import { useState } from "react";
import { Product, ProductInCart, onChangeArgs } from "../interfaces/interfaces";

const useShoppingCard = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ product, count }: onChangeArgs) => {
    setShoppingCart((prev) => {
      if (count === 0) {
        const { [product.id]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [product.id]: { ...product, count },
      };
    });
  };
  return [shoppingCart, onProductCountChange] as const;
};
export default useShoppingCard;
