import React from 'react';
import '../Styles/style.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const value = event.target.textContent;
    const solution = calculate(this.state, value);
    this.setState(solution);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculatorMain">
        <p className="display">
          { total }
          { operation }
          { next }
        </p>
        <KeyBoard handler={this.handleClick} />
      </div>

    );
  }
}

const KeyBoard = (props) => {
  const { handler } = props;
  return (
    <div className="KeyBoard">
      <button type="button" onClick={handler} className="btnPad0">0</button>
      <button type="button" onClick={handler} className="btnPad1">1</button>
      <button type="button" onClick={handler} className="btnPad2">2</button>
      <button type="button" onClick={handler} className="btnPad3">3</button>
      <button type="button" onClick={handler} className="btnPad4">4</button>
      <button type="button" onClick={handler} className="btnPad5">5</button>
      <button type="button" onClick={handler} className="btnPad6">6</button>
      <button type="button" onClick={handler} className="btnPad7">7</button>
      <button type="button" onClick={handler} className="btnPad8">8</button>
      <button type="button" onClick={handler} className="btnPad9">9</button>
      <button type="button" onClick={handler} className="btnPadAdd">+</button>
      <button type="button" onClick={handler} className="btnPadMinus">-</button>
      <button type="button" onClick={handler} className="btnPadDiv">÷</button>
      <button type="button" onClick={handler} className="btnPadMultiply">x</button>
      <button type="button" onClick={handler} className="btnPadEqual">=</button>
      <button type="button" onClick={handler} className="btnPadPercentage">%</button>
      <button type="button" onClick={handler} className="btnPadAllClear">AC</button>
      <button type="button" onClick={handler} className="btnPadMasMin">+/-</button>
      <button type="button" onClick={handler} className="btnPadDecimal">.</button>
    </div>

  );
};
export default Calculator;
