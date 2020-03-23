import React, { Component } from "react";
import axios from "axios";
import ExchangeButton from "../Exchange-Button/ExchangeButton";
import { isNumber } from "util";

class Currency extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rates: [],
      amountInput: ""
    };
  }
  componentDidMount() {
    this.exchangeRates();
  }
  exchangeRates = () => {
    axios.get(`https://api.exchangeratesapi.io/latest`).then(res => {
      this.setState({
        rates: res.data
      });
    });
  };

  render() {
    const { rates, amountInput } = this.state;
    return (
      <div>
        <ExchangeButton exchangeRate={rates} />
        <div>
          <input
            value={amountInput}
            onChange={e => this.setState({ amountInput: e.target.value })}
          />
        </div>
      </div>
    );
  }
}

export default Currency;
