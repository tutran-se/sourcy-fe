import { Product } from "@/app/page";
import Image from "next/image";
import React from "react";

const extractFirstImageUrl = (urlsString: string) => {
  // Remove the surrounding braces
  const trimmedString = urlsString.slice(1, -1);

  // Split the string by commas
  const urlsArray = trimmedString.split(",");

  // Return the first URL
  return urlsArray[0];
};

interface IProductItemProps {
  product: Product;
  fetchRelatedProducts?: (productId: string) => void;
  isRelatedProductItem?: boolean;
}

const ProductItem = ({
  product,
  fetchRelatedProducts,
  isRelatedProductItem = false,
}: IProductItemProps) => {
  const { product_id, title_translated, gpt_description, image_urls } = product;

  const firstImageUrl = extractFirstImageUrl(image_urls);

  return (
    <li className="border rounded flex gap-2 bg-gray-200">
      <div className="h-64 w-96 relative overflow-hidden rounded">
        <Image src={firstImageUrl} alt="img" layout="fill" />
      </div>
      <div>
        <h3 className="font-semibold">{title_translated}</h3>
        <p className="text-gray-500 text-sm">{gpt_description}</p>
        {!isRelatedProductItem && fetchRelatedProducts && (
          <button
            className="bg-gray-900 text-white mt-6 p-2"
            onClick={() => fetchRelatedProducts(String(product_id))}
          >
            Get related products
          </button>
        )}
      </div>
    </li>
  );
};

export default ProductItem;
