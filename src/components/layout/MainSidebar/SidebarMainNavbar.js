import React from "react";
import { Navbar, NavbarBrand } from "shards-react";

class SidebarMainNavbar extends React.Component {
  render() {
    return (
      <div className="main-navbar">
        <Navbar
          className="align-items-stretch bg-white flex-md-nowrap  p-0"
          type="light"
        >
          <NavbarBrand href="#" style={{ lineHeight: "25px" }}>
            <div className="d-table" style={{ marginLeft: "10px" }}>
              <img
                id="main-logo"
                className="d-inline-block align-top mr-1"
                style={{ maxWidth: "25px" }}
                src={require("../../../images/chat.jpg")}
                alt="Shards Dashboard"
              />

              <span className="d-none d-md-inline ml-1">BlueReceipt</span>
            </div>
          </NavbarBrand>
          {/* eslint-disable-next-line */}
          <a className="toggle-sidebar d-sm-inline d-md-none d-lg-none">
            <i className="material-icons">&#xE5C4;</i>
          </a>
        </Navbar>
      </div>
    );
  }
}

export default SidebarMainNavbar;
