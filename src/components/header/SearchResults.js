import React from "react";
import "./SearchResult.css";
import SearchItem from "./SearchItem";

function SearchResults() {
  // let search results represent sr
  return (
    <div className="sr-container">
      <div style={{ paddingTop: "15px" }}>
        <SearchItem title="mrbeast" />
      </div>
      <SearchItem title="michael jackson" />
      <SearchItem title="manchester united" />
      <SearchItem title="messi" />
      <SearchItem title="inter miami" />
      <SearchItem title="liverpool" />
      <SearchItem title="barcelona" />
      <SearchItem title="messi inter miami" />
      <SearchItem title="al nassr" />
      <SearchItem title="fiba" />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div></div>
        <div className="report">Report search predictions</div>
      </div>
    </div>
  );
}

export default SearchResults;
