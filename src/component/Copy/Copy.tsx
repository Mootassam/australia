import React from "react";
import "./copy.css";
import { IoIosWifi } from "react-icons/io";
import Number from "../../shared/Number";
import Dates from "../../shared/dates";
function Copy(props) {
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
    <div className="app__copy">
      <div className="copy__header">
        <div>
          <span className="copy__time">{Dates.currentTime()}</span>
        </div>
        <div className="copy__right">
          <div className="siri__data __morespace">
            <div className="data__1 __black"></div>
            <div className="data__2 __black"></div>
            <div className="data__3 __gray "></div>
            <div className="data__4 __gray"></div>
          </div>

          <IoIosWifi size={18} color="black" />

          <div className="battery__siri ">
            <div className="siri__battery __moreraduis">
              <div
                className="siri__level __black __raduis"
                style={{ width: `${limit}%`, background: CheckstatusBattery() }}
              ></div>
            </div>
            <div className="siri__border"></div>
          </div>
        </div>
      </div>

      <div className="copy__subheader">
        <div>
          <img src="/Westpac/back.png" alt="" width={13} />
        </div>
        <div>
          <img src="/Westpac/upload.png" alt="" width={17} />
        </div>
      </div>

      <div className="copy__content">
        <div className="copy__circle">
          <span>M</span>
        </div>

        <div className="copy__text">
          <h1>Payment details</h1>
          <span>Processing</span>
        </div>

        <div className="copy__amount">
          <h1 className="style__amount">{Number.formatAmountInAustralia(props.amount)}</h1>
          <span className="style__description">
            Scheduled for {Dates.getcopy()} (Sydney time)
          </span>
        </div>

        <div className="copy__description">
          <div className="description">
            <label className="description__titles">To mohammedeid@up.me </label>
            <label className="description__number">633-123 193590213 </label>
          </div>
        </div>

        <div className="__description__">
          <div className="description">
            <label className="description__titles">
              From Westpac Choice Student
            </label>
            <label className="description__number">734-069 {Number.genrateRandom6Number()}</label>
            <label className="description__number">COSMAS MITEI</label>
          </div>
        </div>

        <div className="payement__id">
          <label className="payment__title">Payment ID</label>
          <label className="payment__method">
            436044b9-2cce-423c-9733-74f7e813f593
          </label>
        </div>

        <div className="payement__method">
          <label className="payment__title">Payment method</label>
          <label className="payment__method">Osko</label>
        </div>

        <div className="payment__submitted">
          <label className="payment__title">Submitted</label>
          <label className="submitted__title">COSMAS MITEI</label>

          <label className="payment__date">
           {Dates.fulldatecopy()} (Sydney time)
          </label>
        </div>
      </div>

      <div className="app__bottom">
        <div className="copy__button">
          <span>Copy payment</span>
        </div>
        <div className="copy__border"> </div>
      </div>
    </div>
  );
}

export default Copy;
