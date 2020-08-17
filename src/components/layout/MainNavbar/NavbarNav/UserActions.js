import React from "react";

import { DropdownToggle, NavItem, NavLink } from "shards-react";

export default class UserActions extends React.Component {
  render() {
    return (
      <NavItem caret>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={require("./../../../../images/avatars/pnk.jpg")}
            alt="User Avatar"
          />{" "}
          <span className="d-none d-md-inline-block">Pankaj Singh</span>
        </DropdownToggle>
      </NavItem>
    );
  }
}
