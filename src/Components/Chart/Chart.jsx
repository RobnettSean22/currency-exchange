import React, { Component } from "react";

import { Bar, Line, Pie } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {}
    };
  }
  getstuff = (names, rates) => {
    const data = {
      chartData: {
        labels: names,
        datasets: [
          {
            label: "Excahnge rates",
            data: rates,
            backgroundColor: ["rgba(3, 12, 34, 0.75)"]
          }
        ]
      }
    };
    return data;
  };
  render() {
    console.log(this.props.name, this.props.exc);

    return (
      <div>
        <Bar data={this.getstuff} options={{}} />
      </div>
    );
  }
}

export default Chart;
