import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import "../styles/custom-styles.css";

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
        <ProductCard product={products[0]} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="custom-title" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={products[0]} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={products[0]}
          className="bg-dark text-white"
          style={{ width: "300px" }}
        >
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" title="Siiiiiuuu"/>
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};
