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
      <div>
      <button className="rounded-2 py-1 px-2" type="submit">
        <AiOutlineSearch className="search " />
     
      <input
        className="border-0 border-width-0"
        type="text"
        placeholder="search..."
        value={searchterm}
        onChange={(e) => setSearchterm(e.target.value)}
      />
       </button>
    
      </div>
    </form>
  );
};

export default SearchForm;
