import React from "react";
import "./search.css";

const Search = () => {
  return (
    <div className="search">
      <input type="text" className="searchInput" placeholder="Search here..." />
      <button className="searchFilter">
        <img src={process.env.PUBLIC_URL + "/filter.svg"} alt="" />
      </button>
    </div>
  );
};

export default Search;
