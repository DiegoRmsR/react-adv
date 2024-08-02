import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

const products = [
  {
    id: 1,
    title: "Coffe Mug",
    img: "./coffee-mug.png",
  },
  {
    id: 2,
    title: "Coffe Mug",
    img: "./coffee-mug.png",
  },
];
export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={products[0]}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={products[0]}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
