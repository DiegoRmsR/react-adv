import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/products";
import useShoppingCard from "../hooks/useShoppingCard";
import styles from "../styles/styles.module.css";

const product = products[0];
export const ShoppingPage = () => {
  const [shoppingCart, onProductCountChange] = useShoppingCard();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, count, maxCount, isMaxCountReached, increaseBy }) => (
          <>
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {(
              !isMaxCountReached && (
                <button
                className={`${isMaxCountReached && styles.disabled}`}
                onClick={() => increaseBy(2)}
                >
                  +2
                </button>
              )
              )}
              <span>{count} - {maxCount}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
