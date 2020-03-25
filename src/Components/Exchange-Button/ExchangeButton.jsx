import React from "react";

function ExchangeButton(props) {
  calc = (fS, tS, input) => {
    if (fS === 1) {
      input * tS;
    } else if (tS === 1) {
      input * (tS / fS);
    } else if (fS || tS !== 1) {
      input * (tS / fS);
    }
    let calculated = console.log(calculated);
  };
  return (
    <div>
      <button onClick={calc()}></button>
    </div>
  );
}

export default ExchangeButton;
