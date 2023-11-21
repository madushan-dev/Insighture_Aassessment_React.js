import React from "react";
import "./Topbar.css";
import logo from "../../Assets/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar__left">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="topbar__right">
        <div className="button btn-partner">
          <i className="bi bi-chevron-down"></i>
          <button>Partner with us</button>
        </div>
        <div className="button btn-signup">
          <i class="bi bi-house-door"></i>
          <button>Sign up or log in</button>
        </div>
        <div className="button btn-account">
          <i class="bi bi-person"></i>
          <button>Account</button>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
