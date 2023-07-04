import React from "react";
import "./Ingbank.css";

function Ingbank() {
  return (
    <div className="app__ingbank">
      <div className="ingbank__header">
        <div className="ingbattery">
          <div className="ingh__left">
            <div className="ing__timeheader">10:47</div>
          </div>
          <div className="ing__right"></div>
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

            <span className="amount">-$18,014.00</span>

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
          <span className="grey">Sun 18 Jun 2023</span>
          <span className="grey">10:44 PM (Syd/Melb time)</span>

          <span className="receipt__no">Receipt No: N261838998850</span>
        </div>

        <div>
          <img src="/ingbank/barr.png" alt="" className="bar" />

          <div className="uncat__content">
            <div className="uncat__left"> Uncategorised </div>
            <div className="uncat__right">
          
              Change <img src="/ingbank/next.png" alt="" width={6.4} />{" "}
            </div>
          </div>
          <img src="/ingbank/barr.png" alt="" className="bar" />
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
