import { ReactElement } from "react";

export interface ProductCardProps {
  children?: ReactElement | ReactElement[];
  product: Product;
}

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
  Image: ({ img, title }: { img?: string; title?: string }) => JSX.Element,
  Title: ({ title }: { title?: string }) => JSX.Element,
  Buttons: () => JSX.Element,
}