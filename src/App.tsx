import { useRef, useState, useEffect } from "react";
import "./App.css";
import Header from "./layout/Header";
import Sidebar from "./layout/sidebar/Sidebar";
import Screenshot from "./shared/Screenshot";
import { DrawingApp } from "./shared/DrawingApp";
import Ingbank from "./component/Ingbank/Ingbank";
import Green from "./component/Green/Green";
import Siri from "./component/Siri/Siri";
import White from "./component/White/White";
import Westpac from "./component/Westpac/Westpac";
import StremaLine from "./component/StreamLine/StremaLine";
import Copy from "./component/Copy/Copy";
import Italo from "./component/Italo/Italo";

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  const handleCaptureScreenshot = () => {
    Screenshot.handleCaptureScreenshot(divRef);
  };
  const [value, setValue] = useState("siri");
  const [amount, setAmount] = useState(100);
  const [size, setSize] = useState("small");
  const [
    { cursor, canvasRef, color },
    { startDrawing, draw, endDrawing, ...api },
  ] = DrawingApp();
  const toolbarProps = { color, ...api };
  return (
    <>
      <Header />
      <div className="app__content">
        <Sidebar
          screenshot={handleCaptureScreenshot}
          value={value}
          setvalue={setValue}
          setAmount={setAmount}
          setSize={setSize}
          size={value}
          {...toolbarProps}
        />
        <div className="content" ref={divRef}>
          <div className="app__canvas">
            {value === "BankChina" ? (
              <canvas
                ref={canvasRef as any}
                width={384}
                height={801}
                style={{ cursor }}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={endDrawing}
              />
            ) : (
              <canvas
                ref={canvasRef as any}
                width={360}
                height={820}
                style={{ cursor }}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={endDrawing}
              />
            )}
          </div>
          {value === "ingbank" && <Ingbank amount={amount}  />}
          {value === "green" && <Green amount={amount} />}
          {value === "siri" && <Siri amount={amount} />}
          {value === "white" && <White amount={amount} />}
          {value === "westpac" && <Westpac amount={amount} />}
          {value === "streamlinebank" && <StremaLine amount={amount} />}
          {value === "copy" && <Copy amount={amount} />}

          {value === 'italo' && <Italo amount={amount} />} 
          </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default App;
