import { useState, React } from "react";
import "./Breadcrumb.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Breadcrumb() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <div className="breadcrumb">
      <div className="breadcrumb__wrapper">
        <div className="breadcrumb__wrapper__item">
          <div>
            <a href="/">Home</a>
          </div>
          <div>/</div>
          <div className="item-list" onClick={toggleDropdown}>
            <span>Item</span> <i class="bi bi-chevron-down"></i>
          </div>
        </div>
        <div
          className={`breadcrumb__dropdown ${dropdownVisible ? "visible" : ""}`}
        >
          <div className="title">Item List</div>
          <div className="content">
            <div>
              <h2>Category 01</h2>
              <ul>
                <li>Item List 1</li>
                <li>Item List 2</li>
                <li>Item List 3</li>
                <li>Item List 4</li>
                <li>Item List 5</li>
              </ul>
            </div>
            <div>
              <h2>Category 02</h2>
              <ul>
                <li>Item List 1</li>
                <li>Item List 2</li>
                <li>Item List 3</li>
                <li>Item List 4</li>
                <li>Item List 5</li>
              </ul>
            </div>
            <div>
              <h2>Category 03</h2>
              <ul>
                <li>Item List 1</li>
                <li>Item List 2</li>
                <li>Item List 3</li>
                <li>Item List 4</li>
                <li>Item List 5</li>
              </ul>
            </div>
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
