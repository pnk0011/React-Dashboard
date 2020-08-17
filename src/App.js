import React from "react";
import DashboardOverview from "./views/DashboardOverview";
import { Container, Row, Col } from "shards-react";
import MainSidebar from "./components/layout/MainSidebar/MainSidebar";
import MainNavbar from "./components/layout/MainNavbar/MainNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

export default () => (
  <div>
    <Container fluid>
      <Row>
        <MainSidebar />

        <Col
          className="main-content p-0"
          lg={{ size: 10, offset: 2 }}
          md={{ size: 9, offset: 3 }}
          sm="12"
          tag="main"
        >
          {<MainNavbar />}
          <DashboardOverview />
        </Col>
      </Row>
    </Container>
  </div>
);
