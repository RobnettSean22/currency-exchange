import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      res: []
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
    return <div>hello world</div>;
  }
}

export default App;
