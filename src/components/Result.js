import React from "react";

const Result = ({ items }) => {
  console.log(items);

  return (
    <div className="resultContainer">
      <div className="tab">
        {items.map((item) => {
          return (
            <div className="eachtab" key={item.pageid}>
              <p id="title"> {item.title}</p>
              <p
                dangerouslySetInnerHTML={{
                  __html: item.snippet.substring(0, 200),
                }}
              />
              <a
                className="text-decoration-none max read-more"
                href={`http://en.wikipedia.org/?curid=${item.pageid}`}
              >
                Read More
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Result;
