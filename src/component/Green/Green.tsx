import React from "react";
import "./green.css";
import Number from "../../shared/Number";
import Dates from "../../shared/dates";
function Green(props) {
  return (
    <div className="app__green">
      <div className="green__header">
        <div>
          <img src="/Green/close.png" alt="" width={16} />
        </div>
        <div>
          <img src="/Green/share.png" alt="" width={21} />
        </div>
      </div>
      <div className="green_content">
        <div className="gree__circle">
          <img src="/Green/check.png" width={24} />
        </div>
      </div>
      <div className="green__text">
        <h1>Paid {Number.formatAmountInAustralia(props.amount)} to</h1>
        <h1>Kane P</h1>
        <span className="green__code">923- 100 3122 2907 3</span>
        <span className="green__receipt">Receipt no: N261838{Number.genrateRandom6Number()}</span>
        <img src="/Green/bar.png" alt="" />
      </div>

      <div className="green__form">
        <span className="gree__from"> From</span>

        <span className="gree__access"> Smart Access</span>

        <span className="gree__number">(062- 329 {Number.generate4RandomNumber()} {Number.generate4RandomNumber()})</span>

        <span className="gree__from __description"> Description</span>

        <span className="gree__from __detail"> galuega dep bonisi</span>

        <span className="gree__from __transaction"> Transaction date</span>

        <span className="trasaction_date __time">
        
          {Dates.getDatesiri()} (Syd/Melb
        </span>
        <span className="trasaction_date"> Time)</span>

        <span className="trasaction_security __payees">
          For security, payments to new payees
        </span>
        <span className="trasaction_security ">may be held for 24 hours.</span>

        <div className="__osko">
          <span className="trasaction_security ">Sent through.</span>
          <span className="osko">Osko 
          
          <img src="/Green/logo.png" width={22} />
          
          
          </span>
        </div>
      </div>
    </div>
  );
}

export default Green;
