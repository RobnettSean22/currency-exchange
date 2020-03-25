import React, { Component } from "react";
import axios from "axios";

class Currency extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CurrencyRates: [],
      amountInput: "",
      fromSelect: 1.8315,
      toSelect: 1.8315,
      fromName: "",
      toName: ""
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
      fromSelect: e.target.value
    });
  };
  toChange = e => {
    this.setState({
      toSelect: e.target.value
    });
  };

  calc = (fS, tS, input) => {
    let calculated =
      fS === 1
        ? input * tS
        : tS === 1
        ? input * (tS / fS)
        : fS || tS !== 1
        ? input * (tS / fS)
        : "hello";
    console.log(calculated);
  };

  render() {
    const { CurrencyRates, amountInput, fromSelect, toSelect } = this.state;

    let rateArray = Object.entries(CurrencyRates);

    const sortArrays = rateArray.sort().map((items, i) => {
      return (
        <option key={i} value={items[1]}>
          {items[0]}
        </option>
      );
    });

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
          <button
            onClick={this.calc(fromSelect, toSelect, amountInput)}
          ></button>
        </div>
      </div>
    );
  }
}

export default Currency;
