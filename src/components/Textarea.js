import React, {useState} from "react";
import PropTypes from 'prop-types' 

export default function Textarea(props) {
    const [text, setText]= useState('');
    // text="some another new text"; (this is a wrong way to set a value for the text okay!)
    // setText("some new tetx here to change the value of text"); t(this is a correct way to change the text allright!)
    const handleOnUppercase=()=>{
        // console.log("Uppercase was clicked");
        let newText= text.toUpperCase();
        setText(newText);
        // setText("You have clicked on handleOnUppercase")
    }
    const handleOnLowercase=()=>{
        // console.log("Uppercase was clicked");
        let newText= text.toLowerCase();
        setText(newText);
        // setText("You have clicked on handleOnUppercase")
    }
    const handleOnChange=(event)=>{
        // console.log("On change: ");
        setText(event.target.value);
    }
    
  return (
    <div>
      <div className="mb-3 container">
        <h3>{props.heading}</h3>
        <label htmlFor="exampleformControlTextarea1" className="form-label">{props.hero}</label>
        <textarea
          className="form-control"
          id="exampleformControlTextarea1"
          rows="8" value={text}
          onChange={handleOnChange}
        ></textarea>
        <div className="container">
        <button className="btn btn-primary my-3 mx-2" onClick={handleOnUppercase}>Convert to UPPERCASE</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleOnLowercase}>Convert to lowercase</button>
        <h2 className="m-2">Your Text Summary: </h2>
        <p className="count">Word count = {text.split(" ").length} Character counts = {text.length}</p>
        <p className="">{0.008*text.split(" ").length} minutes of read</p>
        <h2>Preview of you text: </h2>
        <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

Textarea.propTypes={
    hero: PropTypes.string.isRequired,
}

Textarea.defaultProps={
    heading: "Enter the value to analyze",
    hero: "this is just the label",
  }

