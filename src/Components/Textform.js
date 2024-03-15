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
    props.showAlert('Converted to Uppercase','success')
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert('Converted to Lowercase','success')

  };
  const handleTrimClick = () => {
    setText(text.split(/\s+/).join(" ").trim());
    props.showAlert('Text has been Trimmed','success')

  };
  const handleClearClick = () => {
    setText("");
    setCharCount(0);
    setWordCount(0);
    props.showAlert('Text has been cleared','success')
  };
  const handleFontClick = () => {
    if (fontFamily === "Arial") {
      setFontFamily("Serif");
    } else {
      setFontFamily("Arial");
    }
    props.showAlert('Font has been Updated','success')

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
    props.showAlert('File has been downloaded','success')

  }


  // Initialize counts when component mounts or text changes
  useEffect(() => {
    calculateCounts(text);
  }, [text]);
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myTextArea"
            value={text}
            rows="3"
            onChange={handleOnChange}
            style={{backgroundColor:props.mode === 'light'?'white':'#042743',color:props.mode === 'light'?'black':'white'}}
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
      <div className="container my-5" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>Your Text Summary</h2>
        <p>Character Count: {charCount}</p>
        <p>Word Count: {wordCount}</p>
        <h2>Preview</h2>
        <p style={{ fontFamily: fontFamily }}>{text.length>0?text:'Enter text above to preview it here ...'}</p>
      </div>
    </>
  );
}
