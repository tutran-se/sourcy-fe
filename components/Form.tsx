import React from "react";

export const Form = ({
  fetchData,
}: {
  fetchData: (searchTerm: string) => void;
}) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // fetch products
    fetchData(searchTerm);

    // cleanup input
    setSearchTerm("");

    // focus on input
    searchInputRef.current?.focus();
  };

  // auto focus on search input upon page load
  React.useEffect(() => {
    searchInputRef.current?.focus();
  }, []);
  return (
    <div className="mb-6">
      <form onSubmit={handleSearch}>
        <input
          ref={searchInputRef}
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
