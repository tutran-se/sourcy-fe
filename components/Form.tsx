import React from "react";

export const Form = ({
  fetchData,
}: {
  fetchData: (searchTerm: string) => void;
}) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // fetch products
    fetchData(searchTerm);

    // cleanup input
    setSearchTerm("");

    // refocus input
    const input = document.querySelector("input");
    if (input) {
      input.focus();
    }
  };
  return (
    <div className="mb-6">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for products"
          className="border p-2 mr-4 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="border p-2 bg-black text-white rounded"
        >
          Search
        </button>
      </form>
    </div>
  );
};
