import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import { useState } from "react";
// import About from "./Components/About";
import Alert from "./Components/Alert";


function App() {
  const [mode, setMode] = useState("light");
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=() => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode Enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode Enabled","success");    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggle={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Textform heading="Enter Text Below" mode={mode} showAlert={showAlert}/>
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
