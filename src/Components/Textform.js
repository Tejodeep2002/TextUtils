import React, { useState } from "react";

export default function Textform(props) {
  const handelUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Uppercase","success");
  };

  const handelLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase","success");
  };
  const handelCapClick = () => {
    // console.log("Uppercase was clicked" + text);
    const newtext = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newtext);
    props.showAlert("Converted to Capitalize","success");
  };
  const handelClrClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newtext = "";
    setText(newtext);
    props.showAlert("Converted to Clear successful","success");
  };
  const handelOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
    
  };

  const handleCopy = () => {
    // console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy Text","success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces","success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handelOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handelUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handelLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handelCapClick}>
          Convert to capitalize
        </button>
        <button className="btn btn-primary mx-2" onClick={handelClrClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra space
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summery</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview your text "}</p>
      </div>
    </>
  );
}
