import React from "react";
import { NavItem, NavLink, Badge } from "shards-react";

export default class Notifications extends React.Component {
  render() {
    return (
      <NavItem className="border-right dropdown notifications">
        <NavLink className="nav-link-icon text-center">
          <div className="nav-link-icon__wrapper">
            <i className="material-icons">&#xE7F4;</i>
            <Badge pill theme="danger">
              1
            </Badge>
          </div>
        </NavLink>
      </NavItem>
    );
  }
}
