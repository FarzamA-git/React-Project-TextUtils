import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import About from "./Components/About";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    document.body.style.backgroundColor = newMode === "light" ? "white" : "#042743";
    showAlert(`${newMode === "light" ? "Light" : "Dark"} mode Enabled`, "success");
  };

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggle={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<Textform heading="Enter Text Below" mode={mode} showAlert={showAlert} />} />
        <Route path="/about" element={<About mode={mode}/>} />
      </Routes>
    </Router>
  );
}

export default App;
