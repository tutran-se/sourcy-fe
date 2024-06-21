import { Product } from "@/app/page";
import React from "react";

const ProductItem = ({ product }: { product: Product }) => {
  const { title_translated, stock_count } = product;
  return (
    <li className="p-2 border rounded">
      <h3 className="font-semibold">title_translated: {title_translated}</h3>
      <p className="text-gray-500">stock_count: {stock_count}</p>
    </li>
  );
};

export default ProductItem;
