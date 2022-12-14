import React from "react";

const Header = () => {
  return (
    <div className="container text-center py-2">
      <h2> Wikipedia</h2>
      <p className="text-italic"> The Free Encyclopedia</p>
      <div>
        <img src={require("../assets/Wikipedia_Logo_1.0.png")} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
