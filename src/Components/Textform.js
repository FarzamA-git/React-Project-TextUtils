import React, { useState,useEffect } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter your text");
  const [charCount, setCharCount] = useState();
  const [wordCount, setWordCount] = useState();


  const calculateCounts = (inputText) => {
    setCharCount(inputText.length);
    setWordCount(inputText.trim().split(/\s+/).length);
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
        <button
          className="btn btn-primary mx-1"
          onClick={handleLowClick}
        >
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleTrimClick}
        >
          Trim your Text
        </button>
      </div>
      <div className="container my-5">
        <h2>Your Text Summary</h2>
        <p>Character Count: {charCount}</p>
        <p>Word Count: {wordCount}</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      
    </>
  );
}
