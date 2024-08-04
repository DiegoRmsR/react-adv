import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductButtons";

export interface Product {
  id: number;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element,
  Image: ({ img, className }: ProductImageProps) => JSX.Element,
  Title: ({ title, className }: ProductTitleProps) => JSX.Element,
  Buttons: ({ className }: ProductButtonsProps) => JSX.Element,
}

export interface onChangeArgs {
  product: Product;
  count: number;
}


export interface ProductInCart extends Product {
  count: number;
}
