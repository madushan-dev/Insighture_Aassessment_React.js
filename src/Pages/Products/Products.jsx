import React from "react";
import "./Products.css";
import Topbar from "../../Components/Topbar/Topbar";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Products() {
  return (
    <div className="Products">
      <Topbar />
      <Breadcrumb />
      <Sidebar />
    </div>
  );
}

export default Products;
