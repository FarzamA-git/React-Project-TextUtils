import "./App.css";
import Navbar from "./Components/Navbar";
// import Textform from "./Components/Textform";
import About from "./Components/About";


function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      {/* <div className="container my-3"><Textform  heading="Enter Text Below"/></div> */}
      <About />
    </>
  );
}

export default App;
