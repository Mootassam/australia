import React from "react";

import "./westapac.css";
import Dates from "../../shared/dates";
import { IoIosWifi } from "react-icons/io";
import Number from "../../shared/Number";



function Westpac(props) {

  const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  const CheckstatusBattery = () => {
    let background = "";

    if (limit >= 20) {
      background = "#fdd60c";
    }

    if (limit <= 20) {
      background = "#FD3731";
    }

    if (limit >= 40) {
      background = "#000";
    }

    return background;
  };
  return (
    <div className="app__westpack">
      <div className="westpack__header">
        <div className="westpack">
          <span className="westpack__time">{Dates.currentTime()}</span>
        </div>

        <div className="westpac__black">

        <div className="siri__right">
          <div className="siri__data">
            <div className="data__1 __black"></div>
            <div className="data__2 __black"></div>
            <div className="data__3 __black"></div>
            <div className="data__4 __gray"></div>
          </div>

          <IoIosWifi size={18} color="black" />

          <div className="battery__siri">
            <div className="siri__battery">
              <div className="siri__level __black"      style={{ width: `${limit}%`, background: CheckstatusBattery(), }}></div>
            </div>
            <div className="siri__border"></div>
          </div>
        </div>
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
          <span className="payement__amount">{Number.formatAmountInAustralia(props.amount)}</span>
          <span className="payment__time">Scheduled for {Dates.getwhitespec()}</span>
          <span className="payment__time">(Sydney time)</span>

          <label htmlFor="" className="payment__carmen">
            To Carmen
          </label>
          <span className="refrence__westpac">484-799 165351421</span>

          <div className="westpack__detail">
            <span className="choice__westpac">From Westpac Choice</span>
            <span className="refrence__westpac">735-{Number.generate3RandomNumber()} {Number.genrateRandom6Number()} </span>
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
