import React from "react";
import "./Breadcrumb.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Breadcrumb() {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb__wrapper">
        <div className="breadcrumb__wrapper__item">
          <div>
            <a href="/">Home</a>
          </div>
          <div>/</div>
          <div>
            <span>Item</span> <i class="bi bi-chevron-down"></i>
          </div>
        </div>
        <div className="breadcrumb__wrapper__item">
          <div>
            <a href="/">Home</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
