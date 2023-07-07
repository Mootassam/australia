import React, { useState } from "react";
import "./Italo.css";

import { AiOutlineTags } from "react-icons/ai";
import Number from "../../shared/Number";
import Dates from "../../shared/dates";
import Names from "../../shared/Names";

function Italo(props) {
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

  const [Fullname, setfirst] = useState(Names.generateRandomNamesAustralia());
  const [firstCaracter, setfirstCaracter] = useState(Fullname.charAt(0));

  const text = Fullname.slice(Fullname.lastIndexOf(" ") + 1);

  const [secondCaracter, setSecondCaracter] = useState(text.charAt(0));

  const [email, setEmail]=useState("") ;

  const all =Fullname.split(" ").join("");
  return (
    <div className="app__italo">
      <div className="italo__header">
        <div className="italo__left">
          <span className="italo__time">{Dates.currentTime()}</span>
        </div>
        <div className="italo__right">
          <div className="italo__data">
            <div className="italo__1"></div>
            <div className="italo__2"></div>
            <div className="italo__3"></div>
            <div className="italo__4"></div>
          </div>
          <div className="italo__name">4G</div>
          <div className="italo__battery">
            <div className="italo__batt">
              <div
                className="italo__level"
                style={{
                  width: `${limit}%`,
                  backgroundColor: CheckstatusBattery(),
                }}
              ></div>
            </div>
            <div className="italo__border"></div>
          </div>
        </div>
      </div>
      <div className="italo__subheader">
        <div>
          <img src="Italo/whiteback.png" alt="" width={9} />
        </div>
        <div>
          <span className="italo__payment"> Payment</span>
        </div>
        <div></div>
      </div>
      <div className="italo__content">
        <div className="italo__first">
          <div className="first__left">
            <div className="first__circle">
              <span>{firstCaracter}{secondCaracter}</span>
            </div>
            <label className="carsello">{Fullname}</label>
          </div>
          <div className="first__right">
            <span>{Number.formatAmountInAustralia(props.amount)}</span>
          </div>
        </div>

        <div className="italo__">
          <img src="/Italo/bar.png" alt="" />
          <span className="italo__number">1</span>
          <img src="/Italo/bar.png" alt="" />
          <span className="osko__text">
            <img src="/Italo/osko.png" alt="" width={15} />
            Osko Payment Sent
          </span>
          <img src="/Italo/bar.png" alt="" />

          <div className="sent__">
            <div className="detaill__sent">
              <label htmlFor="" className="sent__text">
                sent
              </label>
              <label htmlFor="" className="sent__detaill">
                {Dates.italodate()}
              </label>
            </div>
            <div className="payid__detail">
              <label htmlFor="" className="sent__text">
                PayID
              </label>
              <label htmlFor="" className="sent__detaill">
              {all}{Names.generateRandomEmail()}
              </label>
            </div>
            <div className="paid__detaill">
              <label htmlFor="" className="sent__text">
                sent
              </label>
              <label htmlFor="" className="paid__text">
                Paid
              </label>
            </div>
            <div className="paymentid__detaill">
              <label htmlFor="" className="sent__text">
                Payment ID
              </label>
              <label htmlFor="" className="payment__number">
                136{Number.genrateRandom6Number()}
              </label>
            </div>
            <div className="bar__italio">
              <img src="/Italo/bar.png" alt="" />
            </div>
            <div className="add__category">
              <span className="italo__category">
                <img src="/Italo/add.png" alt="" width={9} />
                Add category
              </span>
              <img src="/Italo/next.png" alt="" width={8} />
            </div>
            <div className="bar__italio">
              <img src="/Italo/bar.png" alt="" />
            </div>
            <div className="add__category">
              <span className="italo__category">
                <AiOutlineTags color="B2B2B2" />
                Add tags
              </span>
              <img src="/Italo/next.png" alt="" width={8} />
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="italo__insights">
        <div className="italo__image">
          <img src="/Italo/satestique.png" alt="" width="12" />
          <span className="insights">Insights</span>
        </div>

        <div className="payment__period">
          <label htmlFor="" className="period__amount">
            {" "}
            {Number.formatAmountInAustralia(props.amount)}
          </label>
          <label htmlFor="" className="period__month">
            This month
          </label>
        </div>

        <div className="payment__period">
          <label htmlFor="" className="period__amount">
            {Number.formatAmountInAustralia(props.amount)}
          </label>
          <label htmlFor="" className="period__month">
            This year
          </label>
        </div>

        <div className="payment__period">
          <label htmlFor="" className="period__amount">
            {Number.formatAmountInAustralia(props.amount)}
          </label>
          <label htmlFor="" className="period__month">
            All time
          </label>
        </div>
      </div>

      <div className="italo__cover">
        <div>
          <img src="/Italo/back.png" alt="" width={14} />
        </div>

        <span className="">Cover from a Saver</span>
      </div>
      <div className="italo__slice">
        <div>
          <img src="/Italo/slice.png" alt="" width={14} />
        </div>
        <span>Slice this purchase</span>
      </div>

      {/* styling the bottom  */}
      <div className="italo__bottom"></div>
    </div>
  );
}

export default Italo;
