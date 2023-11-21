import React, { useState } from "react";
import "./Sidebar.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const menuData = [
  {
    label: "Side Bar Menu 1",
    submenus: ["Submenu 1", "Submenu 2", "Submenu 3", "Submenu 4"],
  },
  {
    label: "Side Bar Menu 2",
    submenus: [],
  },
  {
    label: "Side Bar Menu 3",
    submenus: ["Submenu 1", "Submenu 2"],
  },
  {
    label: "Side Bar Menu 4",
    submenus: [],
  },
  {
    label: "Side Bar Menu 5",
    submenus: [],
  },
  {
    label: "Side Bar Menu 6",
    submenus: [],
  },
];

function Sidebar() {
  const [openPrimaryMenu, setOpenPrimaryMenu] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const togglePrimaryMenu = (index) => {
    setOpenPrimaryMenu((prevIndex) => (prevIndex === index ? null : index));
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);

    document
      .querySelector(".sidebar-primary")
      .classList.toggle("closed", sidebarOpen);
  };

  return (
    <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
      <div className="sidebar-primary">
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <i className={`bi bi-chevron-${sidebarOpen ? "left" : "right"}`}></i>
        </div>
        {menuData.map((menu, index) => (
          <div
            className="sidebar-primary-item"
            key={index}
            onClick={() => togglePrimaryMenu(index)}
            hidden={!sidebarOpen}
          >
            <div className="primary-menu-header">
              <a href="#">
                {menu.label}{" "}
                {menu.submenus.length > 0 && (
                  <i
                    className={`bi bi-chevron-${
                      openPrimaryMenu === index ? "down" : "right"
                    }`}
                  ></i>
                )}
              </a>
            </div>
            {openPrimaryMenu === index && sidebarOpen && (
              <div className="sidebar-secondary">
                {menu.submenus.map((submenu, subIndex) => (
                  <div className="sidebar-secondary-item" key={subIndex}>
                    <a href="#">{submenu}</a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
