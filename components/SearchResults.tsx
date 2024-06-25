import { Product } from "@/app/page";
import React from "react";
import ProductItem from "./ProductItem";

const SearchResults = ({
  products,
  fetchRelatedProducts,
}: {
  products: Product[];
  fetchRelatedProducts: (productId: string) => void;
}) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl mb-3 font-bold uppercase">Search Results</h2>
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
                fetchRelatedProducts={fetchRelatedProducts}
              />
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SearchResults;
