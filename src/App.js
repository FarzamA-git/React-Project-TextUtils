import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import { useState } from "react";
// import About from "./Components/About";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode=() => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggle={toggleMode}/>
      <div className="container my-3">
        <Textform heading="Enter Text Below" mode={mode}/>
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
