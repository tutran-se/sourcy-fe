"use client";
import { Form } from "@/components/Form";
import Recommendations from "@/components/Recommendations";
import SearchResults from "@/components/SearchResults";
import React from "react";

export type Product = {
  product_id: number;
  title_translated: string;
  gpt_description: string;
};

const HomePage = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [relatedProducts, setRelatedProducts] = React.useState<Product[]>([]);
  const fetchData = async (searchTerm: string) => {
    console.log(process.env.NEXT_PUBLIC_API_URL);
    const API = process.env.NEXT_PUBLIC_API_URL;

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

  return (
    <div className="max-w-2xl mx-auto p-2">
      <h1 className="mb-6 text-3xl">Sourcy Product Search</h1>
      <Form fetchData={fetchData} />
      <SearchResults products={products} />
      <Recommendations products={relatedProducts} />
    </div>
  );
};

export default HomePage;
