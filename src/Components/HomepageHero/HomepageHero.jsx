import React from "react";
import "./HomepageHero.css";
import grocerybag from "../../Assets/grocery-bag.png";
import burger from "../../Assets/burger.png";
import "bootstrap-icons/font/bootstrap-icons.css";

import Topbar from "../Topbar/Topbar";

function HomepageHero() {
  return (
    <div className="HomepageHero">
      <Topbar />
      <div className="HomepageHero__content">
        <div className="HomepageHero__left">
          <img src={grocerybag} alt="" />
        </div>
        <div className="HomepageHero__center">
          <h1>Restaurant food, takeaway and groceries. Delivered.</h1>
          <form className="HomepageHero__search">
            <label htmlFor="search-input">
              Enter a postcode to see what we deliver
            </label>

            <div className="input-wrapper">
              <div className="input-element">
                <i className="bi bi-rocket"></i>
                <input
                  type="text"
                  name="search-input"
                  id="search-input"
                  placeholder="e.g. EC4R 3TE"
                />
              </div>
              <button>Search</button>
            </div>
          </form>
          <p>
            <span className="login-link">Log</span> in for your recent
            addresses.
          </p>
        </div>
        <div className="HomepageHero__right">
          <img src={burger} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomepageHero;
