import React, { Component } from "react";
import "./Chart.scss";
import { HorizontalBar, Line, Pie } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {},
      visible: false
    };
    this.getstuff = this.getstuff.bind(this);
  }

  getstuff = () => {
    this.setState({
      visible: true,
      chartData: {
        labels: this.props.name,
        datasets: [
          {
            label: "Ratest",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.props.exc
          }
        ]
      }
    });
  };
  render() {
    console.log(this.props.name, this.props.exc);

    return (
      <div>
        <div id='button-case'>
          <button onClick={this.getstuff}>Rates Chart</button>
        </div>
        <div className={this.state.visible === true ? "see" : "blind"}>
          <Line
            data={this.state.chartData}
            options={{
              title: {
                display: true,
                text: `${this.props.date} ${this.props.based} Exchange Rates`,
                fontSize: 25
              },
              legend: {
                display: false
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default Chart;
