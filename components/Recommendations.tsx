import React from "react";
import ProductItem from "./ProductItem";
import { Product } from "@/app/page";

const Recommendations = ({ products }: { products: Product[] }) => {
  return (
    <div>
      <h2 className="text-xl mb-3">Recommendations</h2>
      <div>
        <ul>
          {products.length === 0 && (
            <li className="p-2 border rounded">No products found</li>
          )}
          {products.map((product) => (
            <ProductItem key={product.product_id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recommendations;
