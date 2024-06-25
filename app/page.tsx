"use client";
import { Form } from "@/components/Form";
import Recommendations from "@/components/Recommendations";
import SearchResults from "@/components/SearchResults";
import React, { useRef, useState } from "react";

export type Product = {
  product_id: number;
  title_translated: string;
  gpt_description: string;
  image_urls: string;
};

const API = process.env.NEXT_PUBLIC_API_URL;

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const recommendationSectionRef = useRef<HTMLDivElement>(null);

  const fetchData = async (searchTerm: string) => {
    // reset related products
    setRelatedProducts([]);

    // fetch products by search term
    const response = await fetch(
      `${API}/products/search?searchTerm=${searchTerm}`
    );

    if (!response.ok) {
      // TODO: handle error
      return;
    }

    const data = await response.json();
    setProducts(data);
  };

  const fetchRelatedProducts = async (searchTerm: string) => {
    // reset related products
    setRelatedProducts([]);

    // fetch related products
    const response = await fetch(
      `${API}/products/recommendations?productId=${searchTerm}`
    );

    if (!response.ok) {
      // TODO: handle error
      return;
    }

    const data = await response.json();
    setRelatedProducts(data);

    // scroll to the full recommendations section
    await new Promise((resolve) => setTimeout(resolve, 100));
    recommendationSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-2">
      <h1 className="mb-6 text-3xl">Sourcy Product Search</h1>
      <Form fetchData={fetchData} />
      <SearchResults
        products={products}
        fetchRelatedProducts={fetchRelatedProducts}
      />
      <div ref={recommendationSectionRef}>
        <Recommendations products={relatedProducts} />
      </div>
    </div>
  );
};

export default HomePage;
