import React, { useState, useEffect } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter your text");
  const [charCount, setCharCount] = useState();
  const [wordCount, setWordCount] = useState();
  const [fontFamily, setFontFamily] = useState("Arial");

  const calculateCounts = (inputText) => {
    setCharCount(inputText.length);
    if (inputText.trim() === "") {
      setWordCount(0);
    } else {
      setWordCount(inputText.trim().split(/\s+/).length);
    }
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
    calculateCounts(e.target.value);
  };
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
  };
  const handleTrimClick = () => {
    setText(text.split(/\s+/).join(" ").trim());
  };
  const handleClearClick = () => {
    setText("");
    setCharCount(0);
    setWordCount(0);
  };
  const handleFontClick = () => {
    if (fontFamily === "Arial") {
      setFontFamily("Serif");
    } else {
      setFontFamily("Arial");
    }
  };
  const handleDownloadClick =() => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "myTextFile.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link)
  }


  // Initialize counts when component mounts or text changes
  useEffect(() => {
    calculateCounts(text);
  }, [text]);
  return (
    <>
      <div>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="myTextArea"
            value={text}
            rows="3"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleTrimClick}>
          Trim your Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleFontClick}>
          Change Font
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDownloadClick}>
          Download Txt File
        </button>
      </div>
      <div className="container my-5">
        <h2>Your Text Summary</h2>
        <p>Character Count: {charCount}</p>
        <p>Word Count: {wordCount}</p>
        <h2>Preview</h2>
        <p style={{ fontFamily: fontFamily }}>{text}</p>
      </div>
    </>
  );
}
