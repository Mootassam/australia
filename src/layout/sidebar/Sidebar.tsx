import React, { useEffect } from "react";
import "./sidebar.css";
import optionBank from "../../data/OptionBank";
function Sidebar({ screenshot, value, setvalue, setAmount
}) {
  useEffect(() => {
    let data;
  }, [value]);



  return (
    <div className="app__sidebar">
      <div className="sidebar__form">
        <div className="form__group">
          <label htmlFor=""> Select bank</label>
          <select
            name="bank"
            className="app__select"
            onChange={(e) => setvalue(e.target.value)}
          >
            {optionBank.map((item) => (
              <option value={item.value}>{item.name} </option>
            ))}
          </select>
        </div>

        <div className="form__group">
          <label htmlFor=""> Write the Amount</label>
          <input
            type="text"
            onChange={(e) => setAmount(e.target.value)}
            maxLength={7}
          />
        </div>
    
    
      </div>
      <div className="app__screenshot" onClick={() => screenshot()}>
        <img src="/sidebar/screenshot.png" alt="" width={80} />
      </div>



    </div>
  );
}

export default Sidebar;
