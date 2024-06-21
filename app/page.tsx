"use client";
import { Form } from "@/components/Form";
import Recommendations from "@/components/Recommendations";
import SearchResults from "@/components/SearchResults";
import React from "react";

export type Product = {
  id: number;
  title_translated: string;
  stock_count: number;
};

const products: Product[] = [
  {
    id: 1,
    title_translated: "Thick Cotton Sweatshirt",
    stock_count: 123,
  },

  {
    id: 2,
    title_translated: "Product 2",
    stock_count: 123,
  },

  {
    id: 3,
    title_translated: "Product 3",
    stock_count: 123,
  },

  {
    id: 4,
    title_translated: "Product 4",
    stock_count: 123,
  },

  {
    id: 5,
    title_translated: "Product 5",
    stock_count: 123,
  },
];

const HomePage = () => {
  // const [products, setProducts] = React.useState<Product[]>([]);
  const fetchData = async (searchTerm: string) => {
    console.log(process.env.NEXT_PUBLIC_API_URL);
    const API = process.env.NEXT_PUBLIC_API_URL;

    // fetch products
    const response = await fetch(`${API}?search=${searchTerm}`);

    if (!response.ok) {
      // TODO: handle error
      return;
    }

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="max-w-2xl mx-auto p-2">
      <h1 className="mb-6 text-3xl">Sourcy Product Search</h1>
      <Form fetchData={fetchData} />
      <SearchResults products={products} />
      <Recommendations products={products} />
    </div>
  );
};

export default HomePage;
