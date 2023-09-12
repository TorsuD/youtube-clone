import React from "react";
import "./SearchItem.css";
import { AiOutlineSearch } from "react-icons/ai";

function SearchItem({ title }) {
  // SEARCH ITEM WITH MAGNIFYING GLASS
  return (
    <div
      style={{ display: "flex", alignItems: "center", cursor: "default" }}
      className="searchItem-container"
    >
      <div style={{ marginBottom: "5px", marginLeft: "5px" }}>
        <AiOutlineSearch
          color="white"
          style={{ marginTop: "5px", marginRight: "5px" }}
          size={20}
        />
      </div>

      <div className="searchItem-title">{title}</div>
    </div>
  );
}

export default SearchItem;
