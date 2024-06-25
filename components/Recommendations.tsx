import React from "react";
import ProductItem from "./ProductItem";
import { Product } from "@/app/page";

const Recommendations = ({ products }: { products: Product[] }) => {
  return (
    <div>
      <h2 className="text-xl mb-3 font-bold uppercase">Recommendations</h2>
      <div>
        <ul>
          {products.length === 0 && (
            <li className="p-2 border rounded">No products found</li>
          )}
          <div className="grid grid-cols-2 gap-2">
            {products.map((product) => (
              <ProductItem
                key={product.product_id}
                product={product}
                isRelatedProductItem
              />
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Recommendations;
