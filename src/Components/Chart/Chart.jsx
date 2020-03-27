import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { exc, date, based } = this.props;
    console.log(exc, date, based);
    return <div></div>;
  }
}

export default Chart;
