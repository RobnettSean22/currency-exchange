import React, { Component } from "react";
import axios from "axios";

class Currency extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CurrencyRates: [],
      amountInput: ""
    };
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

  calc = (from, input, rate) => {
    let calculated  = from === "EUR" ? input * rate 
  };

  render() {
    const { CurrencyRates, amountInput } = this.state;

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
          <select id='xChange-rates'> {sortArrays}</select>
          <button></button>
        </div>
      </div>
    );
  }
}

export default Currency;
