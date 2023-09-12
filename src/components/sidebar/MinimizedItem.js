import React from "react";
import "./MinimizedItem.css";

function MinimizedItem({ icon, title, fontsize }) {
  return (
    <div className="mini-container">
      <div>
        <div className="mini-icon">{icon}</div>
        <div className="mini-title" style={{ fontSize: fontsize }}>
          {title}
        </div>
      </div>
    </div>
  );
}

export default MinimizedItem;
