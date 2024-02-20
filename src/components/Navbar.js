import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { LinkComponent, SocialComponent } from "../utils/links";

function Navbar() {
  const { openSidebar } = useGlobalContext();

  return (
    <nav id="navbar" className="pt-4 pb-4">
      <div className="container-fluid">
        <div className="row sidebar-details-row">
          <div className="col-3 text-center">
            <Link to="/" className="no-style-default">
              <h4 className="no-style-default">WIKI DRINK</h4>
            </Link>
          </div>
          <div className="nav-toggler col-9 sidebar-details-col pe-5">
            <button className="icon-btn btn nav-toggler" onClick={openSidebar}>
              <i class="bi bi-list"></i>
            </button>
          </div>
          <div className="col-6 nav-ul">
            <LinkComponent />
          </div>
          <div className="col-3 nav-ul">
            <SocialComponent />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
