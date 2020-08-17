import React from "react";
import { Col } from "shards-react";
import SidebarMainNavbar from "./SidebarMainNavbar";
import SidebarNavItem from "./SidebarNavItem";

class MainSidebar extends React.Component {
  render() {
    return (
      <Col
        tag="aside"
        className="main-sidebar px-0 col-12 "
        lg={{ size: 2 }}
        md={{ size: 3 }}
      >
        <SidebarMainNavbar />
        <SidebarNavItem />
      </Col>
    );
  }
}

export default MainSidebar;
