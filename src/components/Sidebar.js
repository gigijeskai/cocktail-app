import React from "react";
import { LinkComponent, SocialComponent } from "../utils/links";
import { useGlobalContext } from "../context/context";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-content">
        <header className="nav-header container sidebar-header">
          <div className="nav-brand">
            <h3>DRINK TEAM</h3>
          </div>
          <button className="nav-toggler btn icon-btn" onClick={closeSidebar}>
            X
          </button>
        </header>
        <div className="container">
          <LinkComponent classLink="sidebar-links" />
        </div>
        <SocialComponent classSocial="sidebar-social" />
      </div>
    </aside>
  );
};

export default Sidebar;
