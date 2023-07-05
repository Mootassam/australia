import React from "react";
import "./streamline.css";
import Dates from "../../shared/dates";
import Number from "../../shared/Number";

import { FiBluetooth, FiWifi } from "react-icons/fi";
import Left from "../../shared/icons/Left";

function StremaLine(props) {
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
      background = "#fff";
    }

    return background;
  };
  return (
    <div className="app__stremaline">
      <div className="stremaline__header">
        <div className="stremaline__left">
          <span className="time__st">{Dates.currentTime()}</span>
          <Left  />
        </div>
        <div className="str__right">

        <FiBluetooth  color="white" size={12} />
          <FiWifi color="white" size={13} />
          <div className="str__data">
            <div className="str__1"></div>
            <div className="str__2"></div>
            <div className="str__3"></div>
            <div className="str__4"></div>
          </div>
          <div className="stremaline__battery">
            <label htmlFor="" className="number__battery">
              {limit}%
            </label>
            <div className="streamline__batt">
              <div className="batt__borders"></div>
              <div className="batt">
                <div className="streamline__level"       style={{ height: `${limit}%`, background: CheckstatusBattery() }} ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="app__subheader">
        <div>
          <img src="/Stremaline/close.png" alt="" width={14} />
        </div>
        <div>
          <img src="/Stremaline/share.png" alt="" width={17} />
        </div>
      </div>

      <div className="stremaline__content">
        <div className="stremaline__circle">
          <img src="/Stremaline/check.png" alt="" width={18} />
        </div>

        <div className="stremaline__description">
          <h1 className="stremaline__amount">
            Paid {Number.formatAmountInAustralia(props.amount)} to
          </h1>
          <h1 className="stremaline__customer">Kane PICKLES</h1>
          <span className="stremaline__number">633-123 2051 4299 5</span>
          <span className="stremaline__receipt">
            Receipt no: N261837{Number.genrateRandom6Number()}
          </span>
        </div>
      </div>
      <div className="stremaline__bar">
        <img src="/Stremaline/bar.png" alt="" />
      </div>

      <div className="stremaline__from">
        <div className="from__stremaline">
          <h1 className="from__stremaline__title">From</h1>
          <span className="basic">Streamline Basic</span>
          <label htmlFor="" className="from__number">
            (063-541 {Number.generateRandom4Number()}{" "}
            {Number.generateRandom4Number()})
          </label>
        </div>

        <div className="from__description">
          <h1 className="from__stremaline__title __bill">Description</h1>
          <span className="bill">bill</span>
        </div>

        <div className="from__transaction">
          <h1 className="from__stremaline__title __spec">Transaction date</h1>
          <span className="from__date">
            {Dates.getDatesiri()} (Syd/Melb Time)
          </span>
        </div>

        <div className="--security">
          <span className="text__security">
            For security, payments to recently added payees{" "}
          </span>
          <span className="text__security">may be held for 24 hours. </span>

          <div className="text__security __show">
            <span>Sent through</span>
            <span className="osko__show">
              Osko <img src="/Stremaline/circle.png" alt="" width={15} />
            </span>
          </div>
        </div>
      </div>

      <div className="stremaline__grey"></div>
      <div className="__text__bottom">
        <span>Manage your business cash flow with a </span>
        <span>Business Transaction Account</span>
      </div>

      <div className="stremaline__bottom">



<img src="/Stremaline/navmobile.png" alt="" width={213} />




      </div>
    </div>
  );
}

export default StremaLine;
