import React from "react";
import "./Ingbank.css";
import Dates from "../../shared/dates";
import Left from "../../shared/icons/Left";
import { IoIosWifi } from "react-icons/io";
import Number from "../../shared/Number";

function Ingbank(props) {
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
    <div className="app__ingbank">
      <div className="ingbank__header">
        <div className="ingbattery">
          <div className="ingh__left">
            <div className="ing__timeheader">{Dates.currentTime()}
            <Left />
            </div>
          </div>
          <div className="ing__right">
          <div className="siri__data">
            <div className="data__1 "></div>
            <div className="data__2"></div>
            <div className="data__3 __ing"></div>
            <div className="data__4"></div>
          </div>

          <IoIosWifi size={18} color="white" />
          <div className="battery__siri">
            <div className="siri__battery">
              <div className="siri__level"      style={{ width: `${limit}%`, background: CheckstatusBattery(), }}></div>
            </div>
            <div className="siri__border"></div>
          </div>
          </div>
        </div>

        <div className="ingsubheader">
          <div className="ingsubheader__left">
            <img src="/ingbank/back.png" alt="" width={12} />
          </div>
          <div className="ingsubheader__right">
            <img src="/ingbank/upload.png" alt="" width={16} />
          </div>
        </div>
      </div>

      <div className="ing__content">
        <div className="content__logo">
          <img src="/ingbank/logo.png" alt="" width={44} />
        </div>

        <div className="content__text">
          <div className="text__top">
            <span className="uncategorised">Uncategorised</span>
            <span className="amount">-{Number.formatAmountInAustralia(props.amount)}</span>
            <span className="transfer__customer">Transfer to Kane Pickles</span>
          </div>
        </div>

        <div className="text__middle">
          <span>Kane PICKLES</span>

          <span>923100312229073</span>

          <span>ING Bank (Australia) Limited (trading as ING)</span>

          <span>Bockers and Pony - Kongjamz</span>
        </div>
        <div className="text__bottom">
          <span className="grey">{Dates.getDateing()}</span>
          <span className="grey">{Dates.ingtime()} (Syd/Melb time)</span>
          <span className="receipt__no">Receipt No: N261838{Number.genrateRandom6Number()}</span>
        </div>

        <div className="ingnew">
          <img src="/ingbank/bar.png" alt="" className="bars" width={700} />

          <div className="uncat__content">
            <div className="uncat__left"> Uncategorised </div>
            <div className="uncat__right">
          
              Change <img src="/ingbank/next.png" alt="" width={6.4} />{" "}
            </div>
          </div>
          <img src="/ingbank/bar.png" alt="" className="bars" />
        </div>
      </div>

      <div className="ing__bottom">
        <div className="ing__help">
          <div className="help__border"></div>

          <div className="help__text">
            <div className="help__">Hi, can I help?</div>

            <div>
              <img src="/ingbank/ask.png" alt="" width={26} />
            </div>
          </div>
        </div>

        <div className="ing__menu">
          <div>
            <img src="/ingbank/home.png" alt="" width={19} />
            <label htmlFor="" className="menu__title">
              Home
            </label>
          </div>
          <div>
            <img src="/ingbank/Accounts.png" alt="" width={19} />
            <label htmlFor="" className="menu__title">
              Accounts
            </label>
          </div>

          <div>
            <img src="/ingbank/pay.png" alt="" width={23} />
            <label htmlFor="" className="menu__title">
              Pay
            </label>
          </div>
          <div>
            <img src="/ingbank/cards.png" alt="" width={20} />
            <label htmlFor="" className="menu__title">
              Cards
            </label>
          </div>
          <div>
            <img src="/ingbank/start.png" alt="" width={29} />

            <label htmlFor="" className="menu__title">
              For you
            </label>
          </div>
        </div>
        <div className="ing__phone"></div>
      </div>
    </div>
  );
}

export default Ingbank;
