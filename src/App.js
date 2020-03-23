import React, { Component } from "react";
import Currency from "./Components/Currency/Currency";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Currency />
      </div>
    );
  }
}

export default App;
