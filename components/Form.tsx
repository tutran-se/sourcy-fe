import React from "react";
import DOMPurify from "dompurify";

export const Form = ({
  fetchData,
}: {
  fetchData: (searchTerm: string) => void;
}) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm.trim() === "") alert("Please enter a search term");

    // Sanitize the input
    const sanitizedSearchTerm = DOMPurify.sanitize(searchTerm.trim());

    // fetch products
    fetchData(sanitizedSearchTerm);

    // cleanup input
    setSearchTerm("");

    // focus on input
    searchInputRef.current?.focus();
  };

  // auto focus on search input upon page load
  React.useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  // implement shortcut keyboard
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "F") {
        e.preventDefault();
        searchInputRef.current?.focus();

        // scroll to the search input
        searchInputRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="mb-6">
      <form onSubmit={handleSearch}>
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search for products e.g: table, oil"
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
      <p className="text-gray-500 mt-2">
        Press <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>F</kbd> for quick search
      </p>
    </div>
  );
};
