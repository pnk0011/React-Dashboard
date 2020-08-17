import React from "react";

import {
  Row,
  Col,
  FormSelect,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

class revenueCard extends React.Component {
  render() {
    return (
      <Card
        small
        className="h-100"
        style={{ backgroundColor: "#00b8d8", width: "248px" }}
      >
        <CardBody>
          <div>
            <div className="stats-small__data">
              <span className="stats-small__label text-uppercase ">REVENU</span>
              <h6 className="stats-small__value count revenue-percentage revenue-text-color ">
                $10,28.3
                <Button size="sm revenue-button" style={{ display: "flex" }}>
                  <span class="material-icons  small upward-arrow">north</span>
                  26.84%
                </Button>
              </h6>
              <span className="revenue-all-time">ALL TIME</span>
            </div>

            <hr />
            <div className="stats-small__data stats-small__data__margin-top">
              <h6 className="stats-small__value count revenue-percentage revenue-text-color">
                $67,84.9
                <Button size="sm revenue-button" style={{ display: "flex" }}>
                  <span class="material-icons  small downward-arrow">
                    south
                  </span>
                  18.36%
                </Button>
              </h6>
              <span className="revenue-all-time">LAST 14 DAYS</span>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default revenueCard;
