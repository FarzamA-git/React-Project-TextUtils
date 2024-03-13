import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3"><Textform  heading="Enter Text Below"/></div>
      
    </>
  );
}

export default App;
