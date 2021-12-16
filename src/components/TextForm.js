import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleCopy = () => {
    let text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied To Clipboard", "success");
  };

  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Your Text Here");

  return (
    <>
      <div
        className="container mb-3"
        style={{
          color: props.mode == "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <label htmlFor="textBox" className="form-label"></label>
        <textarea
          className="form-control"
          id="textBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#02011d",
            color: props.mode === "light" ? "#2b2f36" : "white",
          }}
        ></textarea>
        <button className="btn btn-primary my-1" onClick={handleUpperClick}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>
          Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-secondary" onClick={handleCopy}>
          copy
        </button>
      </div>
      <div
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
        className="container my-2"
      >
        <p>
          Total words: {text === "" ? 0 : text.split(" ").length}, Total
          characters: {text.length}, Total blank spaces:{" "}
          {text.split(/\s+/gi).length - 1},
        </p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};
