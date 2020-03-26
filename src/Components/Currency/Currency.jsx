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
      fromSelect: 1.8315,
      toSelect: 1.8315,
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
        exchanged: calculated,
        display: true
      });
    } else if (toSelect[0] === 1) {
      let rate = 1 / fromSelect[0];
      let reverseRate = toSelect[0] / fromSelect[0];
      let calculated = amountInput * rate;
      this.setState({
        exchanged: calculated,
        oneFromRate: rate,
        oneToRate: reverseRate,
        display: true
      });
    } else if (fromSelect[0] || toSelect[0] !== 1) {
      let reverseRate = toSelect[0] / fromSelect[0];
      let rate = fromSelect[0] / toSelect[0];
      let calculated = amountInput * reverseRate;
      this.setState({
        exchanged: calculated,
        oneFromRate: reverseRate,
        oneToRate: rate,
        display: true
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

    console.log(data.date);

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
          <div id='calculator'>
            <input
              value={amountInput}
              onChange={e => this.setState({ amountInput: e.target.value })}
            />
            <select value={fromSelect} onChange={this.fromChange}>
              <option value='1'>{data.base}</option>
              {sortArrays}
            </select>
            <select value={toSelect} onChange={this.toChange}>
              <option value='1'>{data.base}</option>
              {sortArrays}
            </select>
          </div>
          <div id='conversion'>
            <button onClick={this.calc}>Convert</button>
          </div>
        </div>
        <div className={display ? "results" : "hidden"}>
          <div id='fromto'>
            {fromSelect[1]} to {toSelect[1]}
          </div>
          <div>
            {exchanged}
            {oneFromRate}
            {oneToRate}
          </div>
          <div id='date'>{data.date}</div>

          {fromSelect[1]}

          {toSelect[1]}
        </div>
      </div>
    );
  }
}

export default Currency;
