import React from "react";
import "./SideItem.css";
import { FiRadio } from "react-icons/fi";
import { BsDot } from "react-icons/bs";

function SideItem({ icon, title, marginLeft, live, dot }) {
  // SIDE ITEM IS THE ITEMS OR OPTIONS ON THE SIDE BAR
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "1px",
        padding: "7px",
        alignItems: "center",
      }}
      className="side-item-container"
    >
      <div className="side-icon">{icon}</div>

      <div className="side-title" style={{ marginLeft: marginLeft }}>
        {title}
      </div>

      {/* IF LIVE IS TRUE, SHOW RADIO ICON */}
      {live && (
        <div
          className="side-live"
          style={{ justifyContent: "flex-end", marginLeft: "auto" }}
        >
          <FiRadio color="#cc0100" style={{ marginTop: "4px" }} />
        </div>
      )}

      {/* IF DOT IS TRUE, SHOW THE BLUE DOT */}
      {dot && (
        <div
          className="side-live"
          style={{ justifyContent: "flex-end", marginLeft: "auto" }}
        >
          <BsDot color="#4495db" style={{ marginTop: "4px" }} />
        </div>
      )}
    </div>
  );
}

export default SideItem;
