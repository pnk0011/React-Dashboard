import React from "react";

import { NavLink, Progress } from "shards-react";

const SidebarNavItem = () => (
  <div style={{ fontWeight: "600" }}>
    <NavLink>
      <div className="d-inline-block item-icon-wrapper">
        <i className="material-icons">dashboard</i>
      </div>

      <span> Dashboard</span>
    </NavLink>
    <NavLink className="disabled">
      <div className="d-inline-block item-icon-wrapper">
        <i className="material-icons">campaign</i>
      </div>
      <span> Campaigns</span>
    </NavLink>
    <NavLink className="disabled">
      <div className="d-inline-block item-icon-wrapper">
        <i className="material-icons">people_alt</i>
      </div>

      <span> Segments</span>
    </NavLink>
    <NavLink className="disabled">
      <div className="d-inline-block item-icon-wrapper">
        <i className="material-icons">android</i>
      </div>

      <span> Automation Bot</span>
    </NavLink>
    <NavLink className="disabled">
      <div className="d-inline-block item-icon-wrapper">
        <i className="material-icons">chat</i>
      </div>

      <span> Conversation</span>
    </NavLink>
    <hr style={{ width: "80%" }} />
    <NavLink className="disabled">
      <div className="d-inline-block item-icon-wrapper">
        <i className="material-icons">mark_chat_unread</i>
      </div>

      <span> Pop Up</span>
    </NavLink>
    <NavLink className="disabled">
      <div className="d-inline-block item-icon-wrapper">
        <i className="material-icons">local_grocery_store</i>
      </div>

      <span> Abondand Cart</span>
    </NavLink>
    <NavLink className="disabled">
      <div className="d-inline-block item-icon-wrapper">
        <i className="material-icons">local_grocery_store</i>
      </div>

      <span> Country Pricing</span>
    </NavLink>
    <NavLink className="disabled">
      <div className="d-inline-block item-icon-wrapper">
        <i className="material-icons">local_grocery_store</i>
      </div>

      <span> Earn Free Credit</span>
    </NavLink>
    <hr style={{ width: "80%" }} />
    <NavLink className="disabled">
      <div className="d-inline-block item-icon-wrapper">
        <img
          id="main-logo"
          className="d-inline-block align-top mr-1"
          style={{ maxWidth: "25px" }}
          src={require("../../../images/6109403.jpg")}
          alt="Shards Dashboard"
        />
      </div>
      <span style={{ fontWeight: "900" }}> 4085 </span>{" "}
      <span> Subscribers</span>
    </NavLink>
    <div style={{ width: "80%", marginLeft: "10px", fontSize: "x-small" }}>
      <Progress theme="primary" value={50} style={{ height: "7px" }} />
      <div>
        <span>398/2398 </span>
      </div>
    </div>
  </div>
);

export default SidebarNavItem;
