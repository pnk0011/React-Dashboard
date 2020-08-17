import React from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  FormSelect,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from "shards-react";

import Chart from "../../utils/chart";

class UsersByDevice extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const cfg = {
      type: "doughnut",
      data: {
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255,205, 86)"
            ],
            hoverOffset: 4,
            tooltip: false
          }
        ]
      }
    };
    new Chart(this.canvasRef.current.getContext("2d"), cfg);
  }

  render() {
    const { title } = this.props;
    return (
      <Card small className="h-100">
        <div className="">
          <div className="row sms-sent">
            <span className="align-doughnut-data">993</span>
            <span className="align-doughnut-data">283</span>
          </div>
          <div className="row sms-sent">
            <span className="doughnut-text-data">SMS SENT</span>
            <span className="doughnut-text-data">CLICKS</span>
          </div>
        </div>
        <CardBody>
          <Row>
            <div>
              <br />
              <canvas
                height="130"
                width="248"
                ref={this.canvasRef}
                className=""
              />
            </div>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

UsersByDevice.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart config object.
   */
  chartConfig: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object,
  /**
   * The chart data.
   */
  chartData: PropTypes.object
};

UsersByDevice.defaultProps = {
  title: "Users by device",
  chartData: {
    datasets: [
      {
        hoverBorderColor: "#ffffff",
        data: [68.3, 24.2, 7.5],
        backgroundColor: [
          "rgba(0,123,255,0.9)",
          "rgba(0,123,255,0.5)",
          "rgba(0,123,255,0.3)"
        ]
      }
    ],
    labels: ["Desktop", "Tablet", "Mobile"]
  }
};

export default UsersByDevice;
