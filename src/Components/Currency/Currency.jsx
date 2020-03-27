import React, { Component } from "react";

import "./Currency.scss";
import axios from "axios";

class Currency extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      CurrencyRates: [],

      amountInput: "",
      fromSelect: ["1"],
      toSelect: ["1"],
      exchanged: null,
      oneToRate: null,
      oneFromRate: null,
      display: false
    };
    this.fromChange = this.fromChange.bind(this);
  }
  componentDidMount() {
    this.exchangeRates();
  }
  exchangeRates = () => {
    axios.get(`https://api.exchangeratesapi.io/latest`).then(res => {
      this.setState({
        data: res.data,
        CurrencyRates: res.data.rates
      });
    });
  };

  fromChange = e => {
    this.setState({
      fromSelect: e.target.value.split(",")
    });
  };
  toChange = e => {
    this.setState({
      toSelect: e.target.value.split(",")
    });
  };

  calc = () => {
    const { fromSelect, amountInput, toSelect } = this.state;
    if (fromSelect[0] === 1) {
      let calculated = amountInput * toSelect[0];
      this.setState({
        exchanged: calculated
          .toFixed(3)
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
        display: true,
        amountInput: this.state.amountInput
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      });
    } else if (toSelect[0] === 1) {
      let rate = 1 / fromSelect[0];
      let reverseRate = toSelect[0] / fromSelect[0];
      let calculated = amountInput * rate;
      this.setState({
        exchanged: calculated
          .toFixed(3)
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
        oneFromRate: rate.toFixed(3),
        oneToRate: reverseRate.toFixed(3),
        display: true,
        amountInput: this.state.amountInput
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      });
    } else if (fromSelect[0] || toSelect[0] !== 1) {
      let reverseRate = toSelect[0] / fromSelect[0];
      let rate = fromSelect[0] / toSelect[0];
      let calculated = amountInput * reverseRate;
      this.setState({
        exchanged: calculated
          .toFixed(3)
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
        oneFromRate: reverseRate.toFixed(3),
        oneToRate: rate.toFixed(3),
        display: true,
        amountInput: this.state.amountInput
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      });
    }
  };

  render() {
    const {
      CurrencyRates,
      amountInput,
      fromSelect,
      toSelect,
      exchanged,
      oneFromRate,
      oneToRate,
      display,
      data
    } = this.state;

    let rateArray = Object.entries(CurrencyRates);

    const sortArrays = rateArray.sort().map((items, i) => {
      return (
        <option key={i} value={[items[1], items[0]]}>
          {items[0]}
        </option>
      );
    });
    console.log(fromSelect[0], toSelect[2]);

    return (
      <div>
        <div id='container'>
          <div id={display ? "title" : "hidden"}>
            {amountInput} {fromSelect[1]} to {toSelect[1]}
          </div>
          <div id='calculator'>
            <input
              value={amountInput}
              onChange={e => this.setState({ amountInput: e.target.value })}
            />

            <select value={fromSelect} onChange={this.fromChange}>
              <option value={["1"]}>{data.base}</option>
              {sortArrays}
            </select>
            <select value={toSelect} onChange={this.toChange}>
              <option value={["1"]}>{data.base}</option>
              {sortArrays}
            </select>
          </div>
          <div id='conversion'>
            <button onClick={this.calc}>Convert</button>
          </div>
          <div id={display ? "results" : "hidden"}>
            <div id='fromto'>
              <h2>
                {fromSelect[1]} to {toSelect[1]}
              </h2>
            </div>
            <div id='converted'>
              <div id='start'>
                {" "}
                <h2>
                  {amountInput} {fromSelect[1]} =
                </h2>
              </div>
              <div id='mid'>
                <h1>
                  {exchanged} {toSelect[1]}
                </h1>
              </div>
              <div id='fin'>
                {" "}
                <h2>
                  {" "}
                  1 {fromSelect[1]} = {oneFromRate} {toSelect[1]}
                </h2>
                <h2>
                  {" "}
                  1 {toSelect[1]} = {oneToRate} {fromSelect[1]}
                </h2>
              </div>
            </div>
            <div id='date'>
              <h2>Updated on:{data.date}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Currency;
