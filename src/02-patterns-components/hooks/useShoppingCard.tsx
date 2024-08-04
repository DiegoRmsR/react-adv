import { useState } from "react";
import { Product, ProductInCart, onChangeArgs } from "../interfaces/interfaces";

const useShoppingCard = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ product, count }: onChangeArgs) => {
    setShoppingCart((prev) => {
      const productInCart: ProductInCart = prev[product.id] || {
        ...product,
        count: 0,
      };
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...prev,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: _, ...rest } = prev;
      return rest;
    });
  };
  return [shoppingCart, onProductCountChange] as const;
};
export default useShoppingCard;
