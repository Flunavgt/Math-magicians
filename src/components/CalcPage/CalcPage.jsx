import React from 'react';
import Calculator from '../Calculator/Calculator';
import './CalcPage.css';

export default function CalcPage() {
  return (
    <div className="calcPageArea">
      <div className="calcTitle">
        <p>Let&apos;s do some Math!</p>
      </div>
      <div className="CalcMain">
        <Calculator />
      </div>
    </div>
  );
}
