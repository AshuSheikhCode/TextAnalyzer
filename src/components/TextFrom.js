import React, { useState } from "react";

export default function TextFrom(props) {
  const handleUpClick = () => {
    console.log("Uppercase clicked");
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase","success");
  };
  const handleLoClick = () => {
    console.log("Lowercase clicked");
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase","success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed successfully","success");
  };

  const handleClearClick = () => {
    console.log("Clear text");
    setText("");
    props.showAlert("Text clear successfully","success");
  };

  const handleCapitalizeClick = () => {
    console.log("Capitalize Case");
    setText(text.charAt(0).toUpperCase() + text.slice(1));
    props.showAlert("Converted to capitalize case","success");
  };

  const handleDownloadClick = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "textarea_content.txt";
    document.body.appendChild(element);
    element.click();
    props.showAlert("File downloaded successfully","success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className={`container`}>
        <h2 style={{ color: props.mode === "light" ? "black" : "white" }}>
          {props.heading}
        </h2>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            onChange={handleOnChange}
            style={{
              background: props.mode === "dark" ? "#2b343d" : "white" && props.mode === "Greendark" ? "#013220" : "white" ,
              color: props.mode === "dark" ? "white" : "black"
            }}
            id="myBox"
            value={text}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-0.7" onClick={handleCapitalizeClick}>
          Capitalize Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary mx-0.7" onClick={handleClearClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDownloadClick}>
          Download File
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div className="container my-2" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h2 >
          Your text summary here
        </h2>
        <p >
          {text.split(/\s+/).length} words and {text.length} characters
        </p>
        <p >
          {0.008 * text.split(" ").length} Minutes read
        </p>
        <h2 >
          Preview{" "}
        </h2>
        <p >
          {text.length>0? text:'Enter something to preview it here'}
        </p>
      </div>
    </>
  );
}
