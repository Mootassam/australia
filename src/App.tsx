import { useRef, useState, useEffect } from "react";
import "./App.css";
import Header from "./layout/Header";
import Sidebar from "./layout/sidebar/Sidebar";
import Screenshot from "./shared/Screenshot";
import { DrawingApp } from "./shared/DrawingApp";
import Ingbank from "./component/Ingbank/Ingbank";

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  const handleCaptureScreenshot = () => {
    Screenshot.handleCaptureScreenshot(divRef);
  };
  const [value, setValue] = useState("ingbank");
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

{value === "ingbank" && <Ingbank />}
          
     
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default App;
