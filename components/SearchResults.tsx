import { Product } from "@/app/page";
import React from "react";
import ProductItem from "./ProductItem";

const SearchResults = ({ products }: { products: Product[] }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl mb-3">Search Results</h2>
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

export default SearchResults;
