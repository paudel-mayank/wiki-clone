import React from "react";
import { Mycontext } from "./Context/context";
import Result from "./Result";
const ResultContainer = () => {
  const { searchField, searchItems } = Mycontext();
  console.log(searchItems);

  return (
    <div>
      {searchField && searchItems?.query?.searchinfo?.totalhits === 0 && (
        <p className="text-center text-danger py-2"> No results for the text</p>
      )}
      {searchField && searchItems?.query?.searchinfo?.totalhits > 0 && (
        <Result items={searchItems?.query?.search} />
      )}
    </div>
  );
};

export default ResultContainer;
