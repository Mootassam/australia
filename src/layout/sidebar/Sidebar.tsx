import React, { useEffect } from "react";
import "./sidebar.css";
import optionBank from "../../data/OptionBank";
import { FaEraser, FaUndo } from "react-icons/fa";

function Sidebar({ screenshot, value, setvalue, setAmount, setSize, size
  , undo,
  erase,
  color,
  changeColor,
  brushSize,
  changeBrushSize,
  clear


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
        
        <div className="form__group">
          <label htmlFor="">Tools</label>
          <div className="app__tools">
            <input type="color" value={color} onChange={changeColor} className="btn--color" />
            <button className="undo" onClick={undo}>
              <FaUndo />
            </button>
            <button onClick={erase} className="erase__button">
              <FaEraser />
            </button>
          </div>
        </div>
        <div className="form__group">
          <label htmlFor="">Brush Size</label>
          <input
            type="range"
            min="1"
            max="70"
            value={brushSize}
            onChange={changeBrushSize}
          />
          <button onClick={clear} className="clear__button">Clear</button>
        </div>
    
    
      </div>
      <div className="app__screenshot" onClick={() => screenshot()}>
        <img src="/sidebar/screenshot.png" alt="" width={80} />
      </div>



    </div>
  );
}

export default Sidebar;
