import { Product } from "@/app/page";
import React from "react";

const ProductItem = ({ product }: { product: Product }) => {
  const { title_translated, gpt_description } = product;
  return (
    <li className="p-2 border rounded">
      <h3 className="font-semibold">{title_translated}</h3>
      <p className="text-gray-500 text-sm">{gpt_description}</p>
    </li>
  );
};

export default ProductItem;
