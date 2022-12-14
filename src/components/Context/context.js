import { createContext, useState, useContext, useEffect } from "react";

const WikiContext = createContext();

const Context = ({ children }) => {
  const [searchterm, setSearchterm] = useState("");
  const [searchField, setSearchField] = useState("");
  const [searchItems, setSearchItems] = useState([]);

  async function fetchWikiData() {
    if (searchField) {
      await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${searchField}`
      )
        .then((response) => response.json())
        .then((data) => setSearchItems(data))
        .catch((error) => console.log(error));
    } else {
      setSearchItems([]);
    }
  }
  // if (searchField) {
  //   fetchWikiData();
  // }
  useEffect(() => {
    fetchWikiData();
  }, [searchField]);

  return (
    <WikiContext.Provider
      value={{
        searchterm,
        setSearchterm,
        setSearchField,
        searchField,

        searchItems,
      }}
    >
      {children}
    </WikiContext.Provider>
  );
};
export default Context;

export const Mycontext = () => {
  return useContext(WikiContext);
};
