import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Mycontext } from "./Context/context";
const SearchForm = () => {
  const { searchterm, setSearchterm, setSearchField } = Mycontext();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchField(searchterm);
  };
  return (
    <form className="form text-center" onSubmit={handleSubmit}>
      <input
        className="rounded-2 py-1 px-2"
        type="text"
        placeholder="search..."
        value={searchterm}
        onChange={(e) => setSearchterm(e.target.value)}
      />
      <button className="rounded-2 py-1 px-2" type="submit">
        <AiOutlineSearch className="search " />
      </button>
    </form>
  );
};

export default SearchForm;
