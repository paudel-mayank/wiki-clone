import React from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";
import ResultContainer from "./ResultContainer";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchForm />
      <div className="result">
        <ResultContainer />{" "}
      </div>
    </div>
  );
};

export default Home;
