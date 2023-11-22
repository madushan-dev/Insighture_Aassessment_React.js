import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Breadcrumb() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const location = useLocation();
  const [category, setCategory] = useState("");
  const [item, setItem] = useState("");

  useEffect(() => {
    const pathSegments = location.pathname
      .split("/")
      .filter((segment) => segment !== "");
    if (pathSegments.length > 0) {
      setCategory(formatWord(pathSegments[1]));
    }
    if (pathSegments.length > 1) {
      setItem(formatWord(pathSegments[2]));
    }
  }, [location.pathname]);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  // Replacing the dash with space and capitalize the first letter
  const formatWord = (word) => {
    if (!word) return "";
    return word
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  };

  return (
    <div className="breadcrumb">
      <div className="breadcrumb__wrapper">
        <div className="breadcrumb__wrapper__item">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>/</div>
          <div className="item-list" onClick={toggleDropdown}>
            <span>Items</span> <i className="bi bi-chevron-down"></i>
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
                <Link to="./category-01/item-list-01">
                  <li>Item List 1</li>
                </Link>
                <Link to="./category-01/item-list-02">
                  <li>Item List 2</li>
                </Link>
                <Link to="./category-01/item-list-03">
                  <li>Item List 3</li>
                </Link>
                <Link to="./category-01/item-list-04">
                  <li>Item List 4</li>
                </Link>
                <Link to="./category-01/item-list-05">
                  <li>Item List 5</li>
                </Link>
              </ul>
            </div>
            <div>
              <h2>Category 02</h2>
              <ul>
                <Link to="./category-02/item-list-01">
                  <li>Item List 1</li>
                </Link>
                <Link to="./category-02/item-list-02">
                  <li>Item List 2</li>
                </Link>
                <Link to="./category-02/item-list-03">
                  <li>Item List 3</li>
                </Link>
                <Link to="./category-02/item-list-04">
                  <li>Item List 4</li>
                </Link>
                <Link to="./category-02/item-list-05">
                  <li>Item List 5</li>
                </Link>
              </ul>
            </div>
            <div>
              <h2>Category 03</h2>
              <ul>
                <Link to="./category-03/item-list-01">
                  <li>Item List 1</li>
                </Link>
                <Link to="./category-03/item-list-02">
                  <li>Item List 2</li>
                </Link>
                <Link to="./category-03/item-list-03">
                  <li>Item List 3</li>
                </Link>
                <Link to="./category-03/item-list-04">
                  <li>Item List 4</li>
                </Link>
                <Link to="./category-03/item-list-05">
                  <li>Item List 5</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="breadcrumb__wrapper__item">
          <div>
            <div>{category || "Category"}</div>
            <div>/</div>
            <div>{item || "Item List"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
