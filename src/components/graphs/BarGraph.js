import React from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  FormSelect
} from "shards-react";

import Chart from "../../utils/chart";

class UsersOverview extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const chartOptions = {
      ...{
        responsive: true,
        legend: {
          display: false
        },

        scales: {
          xAxes: [
            {
              gridLines: false,
              ticks: {
                callback(tick, index) {
                  // Jump every 6 values on the X axis labels to avoid clutter.
                  return index % 6 !== 0 ? "" : tick;
                }
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                suggestedMax: 45,
                callback(tick) {
                  if (tick === 0) {
                    return tick;
                  }
                  // Format the amounts using Ks for thousands.
                  return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
                }
              }
            }
          ]
        }
      },
      ...this.props.chartOptions
    };

    const BlogUsersOverview = new Chart(this.canvasRef.current, {
      type: "bar",
      data: this.props.chartData,
      options: chartOptions
    });
  }

  render() {
    const { title } = this.props;
    return (
      <Card small className="h-100">
        <CardBody className="pt-0">
          <Row className=" py-2 bg-light">
            <Col style={{ marginLeft: "15px" }}>
              <Row>
                <span className="dashboard_toal-sale">TOTAL SALE</span>
              </Row>
              <Row>
                <span className="dashboard_toal-sale-count">$8,230.38</span>
                <span className="dashboard_toal-sale-percentage">
                  <span class="material-icons  small upward-arrow">north</span>
                  26.84%
                </span>
              </Row>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col className="last30-days-dropdown">
              <FormSelect
                size="sm"
                value="last-week"
                disabled
                style={{ maxWidth: "130px" }}
                onChange={() => {}}
              >
                <option value="last-week">Last 30 days</option>
                <option value="today">Today</option>
                <option value="last-month">Last Month</option>
                <option value="last-year">Last Year</option>
              </FormSelect>
            </Col>
          </Row>
          <canvas
            height="120"
            ref={this.canvasRef}
            style={{ maxWidth: "100% !important" }}
          />
        </CardBody>
      </Card>
    );
  }
}

UsersOverview.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart dataset.
   */
  chartData: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object
};

UsersOverview.defaultProps = {
  title: "TOTAL SALES",
  chartData: {
    labels: Array.from(new Array(30), (_, i) => (i === 0 ? 1 : i)),
    datasets: [
      {
        label: "",
        fill: "start",
        data: [
          500,
          800,
          320,
          180,
          240,
          320,
          230,
          650,
          590,
          1200,
          750,
          940,
          1420,
          1200,
          960,
          1450,
          1820,
          2800,
          2102,
          1920,
          3920,
          3202,
          3140,
          2800,
          3200,
          3200,
          3400,
          2910,
          3100,
          4250
        ],
        backgroundColor: "rgba(0,123,255,1)",
        borderColor: "rgba(0,123,255,1)",
        pointBackgroundColor: "#ffffff",
        pointHoverBackgroundColor: "rgb(0,123,255)",
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      }
    ]
  }
};

export default UsersOverview;
