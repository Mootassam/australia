import React from "react";

import "./westapac.css";

function Westpac() {
  return (
    <div className="app__westpack">
      <div className="westpack__header">
        <div className="westpack">
          <span className="westpack__time">4:53</span>
        </div>
      </div>

      <div className="westpack__subheader">
        <div>
          <img src="/Westpac/back.png" alt="" width={13} />
        </div>
        <div>
          <img src="/Westpac/upload.png" alt="" width={17} />
        </div>
      </div>

      <div className="westpack__content">
        <div className="westpack__amount">
          <h1 className="payment__detail">Payment details</h1>
          <span className="payment__processing">Processing</span>
          <span className="payement__amount">$4,000.00</span>
          <span className="payment__time">Scheduled for Mon 19 Jun 2023</span>
          <span className="payment__time">(Sydney time)</span>

          <label htmlFor="" className="payment__carmen">
            To Carmen
          </label>
          <span className="refrence__westpac">484-799 165351421</span>

          <div className="westpack__detail">
            <span className="choice__westpac">From Westpac Choice</span>
            <span className="refrence__westpac">735-318 666723 </span>
          </div>
        </div>
      </div>

      <div className="carmen__detaill">
        <label htmlFor="" className="carmen">
          Description for carmen
        </label>

        <label htmlFor="" className="customer__name">
          Yukee baniya
        </label>

        <span className="osko__">Osko</span>
      </div>

      <div className="carmen__bottom"></div>
    </div>
  );
}

export default Westpac;
