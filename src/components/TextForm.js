import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    let x = countPunctuations();
    setPuncCount(x);
  };

  const countPunctuations = () => {
    let punc = "!,;.-?";
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (!punc.includes(text[i])) {
        continue;
      }
      count++;
    }
    return count;
  };

  const [text, setText] = useState("Enter Your Text Here");
  const [puncCount, setPuncCount] = useState(0);

  return (
    <>
      <h1>{props.heading}</h1>

      <div className="container mb-3">
        <label htmlFor="textBox" className="form-label"></label>
        <textarea
          className="form-control"
          id="textBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary my-1" onClick={handleUpperClick}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>
          Lowercase
        </button>
        <button className="btn btn-primary " onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-2">
        <p>
          Total words: {text.split(" ").length}, Total characters: {text.length}
          , Total blank spaces: {text.split(/\s+/gi).length - 1},
        </p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};
