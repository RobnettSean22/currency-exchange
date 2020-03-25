import React, { Component } from "react";
import axios from "axios";

class Currency extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CurrencyRates: [],
      amountInput: "",
      fromSelect: 1.8315,
      fromElement: this.props.children,
      toSelect: 1.8315,
      exchanged: null,
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

    let calculated =
      fromSelect[0] === 1
        ? amountInput * toSelect[0]
        : toSelect[0] === 1
        ? amountInput * (1 / fromSelect[0])
        : fromSelect[0] || toSelect[0] !== 1
        ? amountInput * (toSelect[0] / fromSelect[0])
        : "hello";
    this.setState({ exchanged: calculated });
  };

  render() {
    const {
      CurrencyRates,
      amountInput,
      fromSelect,
      toSelect,
      exchanged,
      display
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
        <div>
          <input
            value={amountInput}
            onChange={e => this.setState({ amountInput: e.target.value })}
          />
          <select value={fromSelect} onChange={this.fromChange}>
            <option value='1'>EUR</option>
            {sortArrays}
          </select>
          <select value={toSelect} onChange={this.toChange}>
            <option value='1'>EUR</option>
            {sortArrays}
          </select>
          <button onClick={this.calc}></button>
        </div>
        <div className={display ? "visible" : "hidden"}>
          {exchanged}
          {fromSelect[0]}
          {fromSelect[1]}
          {toSelect[0]}
          {toSelect[1]}
        </div>
      </div>
    );
  }
}

export default Currency;
