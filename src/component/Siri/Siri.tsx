import React from "react";
import "./siri.css";
function Siri() {
  return (
    <div className="app__siri">
      <div className="siri__header">
        <div className="siri__left">
          <span className="siri__time">10:44</span>
        </div>

        <div className="siri__right"></div>
      </div>

      <div className="siri__top"></div>

      <div className="siri__subheader">
        <div className="siri__close">
          <img src="/Siri/close.png" alt="" width={15} />
        </div>
        <div className="siri__receipt">Receipt</div>
        <div className="siri__share">Share</div>
      </div>

      <div className="siri__content">
        <div className="content__circle">
          <img src="/Siri/check.png" alt="" width={16} />
        </div>

        <div className="siri__paid">
          <h1>Paid $18,014.00</h1>
          <h1>to Kane PICKLES</h1>
          <span className="siri__number">923100 312229073</span>
          <span className="paid__receipt">Receipt no: N261838998850</span>
        </div>
        <img src="/Siri/bar.png" alt="" />

        <div className="siri__from">
          <h1 className="siri__title">From</h1>
          <span className="siri__main"> Main</span>
          <span className="siri__number">(063-250 1096 7851)</span>

          <div className="siri__description">
            <h1 className="siri__title">Description</h1>
            <span className="siri__subdescription">
              Bockers and Pony -Kongjamz
            </span>
          </div>

          <div className="siri__transactiondate __trandate">
            <h1 className="siri__title">Transaction Date</h1>
            <span className="siri__subdescription">
              18 Jun 2023 10:44 PM (Syd/Melb time)
            </span>
          </div>

          <div className="siri__security">
            <span className="siri__desc">
              For security, payments torecently added payees may
            </span>
            <span className="siri__desc"> be held for 24 hours.</span>
          </div>
          <div className="siri__through">
            <span className="sent">Sent through</span>
            <img src="/Siri/osko.png" alt="" width={56} />
          </div>
          <span className="siri__add">
            Add to Siri so you can ask to pay Kane PICKLES
          </span>

          <div className="logo__siri">
            <img src="/Siri/add.png" alt="" width={133} />
          </div>
        </div>
      </div>
      <div className="siri__lbar">
        <img src="/Siri/Lbar.png" alt="" />
      </div>

      <div className="siri__cashbak">
        <span className="cashbak">
          Get $50 cashback with StepPay for a limited time.
        </span>
      </div>

      <div className="siri__bottom">
        <span className="learn__more">Learn more</span>
      </div>
    </div>
  );
}

export default Siri;
