import React from "react";
import "./white.css";
function White() {
  return (
    <div className="app__white">
      <div className="white__header">
        <div className="subheader__time">
          <span className="time__white">9:11</span>
        </div>
      </div>

      <div className="white__subheader"></div>
      <div className="white__receipt">
        <span>
          <img src="/white/close.png" width="16" />
        </span>
        <span className="receipt__title"> Receipt</span>
        <span className="white__share"> Share</span>
      </div>

      <div className="white__">
        <div className="white__content">
          <div className="green__cirlce">
            <img src="/white/check.png" alt="" width={17} />
          </div>
        </div>
        <div className="white__paid">
          <h1>Paid $294.48</h1>
          <h1>to kane pickles</h1>
          <span className="white__numbers">633123 205142995</span>
          <span className="__receipt__number">Receipt no: N261837226681</span>
        </div>
        <img src="/white/bar.png" alt="" className="bar" />

        <div className="from__styling __first">
          <h1 className="white__from">From</h1>
          <span className="smart__access"> Smart Access</span>
          <span className="from__number">(063-241 1091 9123)</span>
        </div>

        <div className="from__styling __desc">
          <h1 className="white__from">Description</h1>
          <span className="description__number">(063-241 1091 9123)</span>
        </div>

        <div className="from__styling __desc">
          <h1 className="white__from">Transaction Date</h1>
          <span className="tran__date">
            18 Jun 2023 09:11 PM (Syd/Melb time)
          </span>
        </div>

        <div className="security__payment">
          <span className="security">
            security, payments to recently added payees
          </span>
          <span className="security">may be held for 24 hours.</span>
        </div>

        <div className="security__through">
          <span className="security__sent">Sent through</span>
          <span className="sent__soko">
            Osko <img src="/white/circlewhite.png" alt="" width={21} />
          </span>
        </div>
        <span className="sir__add">
          Add to Siri so you can ask to pay kane pickles
        </span>
        <div className="group__siri">
          <img src="/white/add__siri.png" alt="" width={102} />
        </div>

        <img src="/white/barr.png" width={369} />

        <div className="white__bottom">
        <div className="wite__details">
          <span className="personal">
            Personal Loans: borrow from $4,000 to
          </span>
          <span className="personal">$50,000.</span>
        </div>

        <div className="white__phone"></div>
      </div>
      </div>

      
    </div>
  );
}

export default White;
