import React, { Component } from "react";
import axios from "axios";
import ExchangeButton from "../Exchange-Button/ExchangeButton";

class Currency extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rates: []
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
    const { rates } = this.state;
    return (
      <div>
        <ExchangeButton exchangeRate={rates} />
      </div>
    );
  }
}

export default Currency;
