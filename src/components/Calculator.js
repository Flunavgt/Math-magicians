/* eslint-disable react/prefer-stateless-function */
/* eslint-disable arrow-body-style */
import React from 'react';
import '../Styles/style.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculatorMain">
        <p className="display">this is a test 006  </p>
        <KeyBoard />
      </div>

    );
  }
}

const KeyBoard = () => {
  return (
    <div className="KeyBoard">
      <button type="button" className="btnPad0">0</button>
      <button type="button" className="btnPad1">1</button>
      <button type="button" className="btnPad2">2</button>
      <button type="button" className="btnPad3">3</button>
      <button type="button" className="btnPad4">4</button>
      <button type="button" className="btnPad5">5</button>
      <button type="button" className="btnPad6">6</button>
      <button type="button" className="btnPad7">7</button>
      <button type="button" className="btnPad8">8</button>
      <button type="button" className="btnPad9">9</button>
      <button type="button" className="btnPadAdd">+</button>
      <button type="button" className="btnPadMinus">-</button>
      <button type="button" className="btnPadDiv">/</button>
      <button type="button" className="btnPadMultiply">X</button>
      <button type="button" className="btnPadEqual">=</button>
      <button type="button" className="btnPadPercentage">%</button>
      <button type="button" className="btnPadAllClear">AC</button>
      <button type="button" className="btnPadMasMin">+/-</button>
      <button type="button" className="btnPadDecimal">.</button>
    </div>

  );
};
export default Calculator;
