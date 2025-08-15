import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const handleUpClick = (event) => {
    event.preventDefault();

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = (event) => {
    event.preventDefault();

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClearClick = (event) => {
    event.preventDefault();

    setText("");
    props.showAlert("Clear Text!", "success");
  };

  const handleCopyClick = (event) => {
    event.preventDefault();

    navigator.clipboard.writeText(text);
    props.showAlert("Copied Text!", "success");
  };

  const handleRemoveExtraSpaceClick = (event) => {
    event.preventDefault();

    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Space!", "success");
  };

  return (
    <>
      <form
        className="card p-3"
        style={{
          backgroundColor: props.mode === "dark" ? "#212529e3" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h4 className="mb-4">{props.heading}</h4>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#212529e3" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            onClick={handleUpClick}
            className="btn btn-primary mx-1"
          >
            Convert to Uppercase
          </button>
          <button
            type="submit"
            onClick={handleLoClick}
            className="btn btn-primary mx-1"
          >
            Convert to Lowercase
          </button>
          <button
            type="submit"
            onClick={handleClearClick}
            className="btn btn-primary mx-1"
          >
            Clear Text
          </button>
          <button
            type="submit"
            onClick={handleCopyClick}
            className="btn btn-primary mx-1"
          >
            Copy Text
          </button>
          <button
            type="submit"
            onClick={handleRemoveExtraSpaceClick}
            className="btn btn-primary mx-1"
          >
            Remove Extra Spaces
          </button>
        </div>
      </form>
      <div className="container my-4">
        <h4>Your Text Summary</h4>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h5>Preview</h5>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the Textbox above to preview"}
        </p>
      </div>
    </>
  );
}
