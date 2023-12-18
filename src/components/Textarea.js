import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textarea(props) {
  const [text, setText] = useState("");
  // text="some another new text"; (this is a wrong way to set a value for the text okay!)
  // setText("some new tetx here to change the value of text"); t(this is a correct way to change the text allright!)
  const handleOnUppercase = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
    // setText("You have clicked on handleOnUppercase")
  };
  const handleOnLowercase = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
    // setText("You have clicked on handleOnUppercase")
  };
  const handleOnChange = (event) => {
    // console.log("On change: ");
    setText(event.target.value);
  };
  const TextToSpeech = () => {
    let message = new SpeechSynthesisUtterance();
    message.text = text;
    window.speechSynthesis.speak(message);
    props.showAlert("Text to speech","success");
  };

  const RemoveSymbols = () => {
    if(text.length>1){
      let pattern = /[0-9/a-z/A-Z/ /]/gim;
      let isletter = text.match(pattern);
      let modified = isletter.join("");
      setText(modified);
      props.showAlert("Removed all symbols","success");
    }
    else{
      props.showAlert("Enter some texts first!","warning");
    }
  };

  const replaceString = () => {
    let repval = prompt("Enter the word to be replaced:");
    let tobereplaced = new RegExp(repval, "g");

    let toreplace = prompt("Enter the text that you want to replace with:");

    let newText = text.replace(tobereplaced, toreplace);
    setText(newText);
    props.showAlert("String is replaced","success");
  };
  const copyString = () =>{
    let textbox=document.getElementById("exampleformControlTextarea1");
    textbox.select();
    navigator.clipboard.writeText(textbox.value)
    props.showAlert("String is copied on you clipboard","success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed all extra spaces","success");
}

  return (
    <div>
      <div className="mb-3 container " style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white': 'black'}}>
        <h3>{props.heading}</h3>
        <label htmlFor="exampleformControlTextarea1" className="form-label">
          {props.hero}
        </label>
        <textarea
          className="form-control"
          id="exampleformControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white': 'black'}}
        ></textarea>
        <div className="container" style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white': 'black'}}>
          <button
            className="btn btn-primary my-3 mx-2"
            onClick={handleOnUppercase}
          >
            Convert to UPPERCASE
          </button>
          <button
            className="btn btn-primary my-3 mx-2"
            onClick={handleOnLowercase}
          >
            Convert to lowercase
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={TextToSpeech}>
            TextToSpeech
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={RemoveSymbols}>
            RemoveSymbols
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={replaceString}>
            replaceString
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={copyString}>
            Copy String
          </button>
          <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
            Remove extra spaces
          </button>
          <h2 className="m-2">Your Text Summary: </h2>
          <p className="count">
            Word count = {text.split(" ").length} Character counts ={" "}
            {text.length}
          </p>
          <p className="">{0.008 * text.split(" ").length} minutes of read</p>
          {/* <h2></h2> */}
          <p>{text.length>0?text:"Enter texts in box to preview here!"}</p>
        </div>
      </div>
    </div>
  );
}

Textarea.propTypes = {
  hero: PropTypes.string.isRequired,
};

Textarea.defaultProps = {
  heading: "Enter the value to analyze",
  hero: "this is just the label",
};

// const speak = () => {
//   let msg = new SpeechSynthesisUtterance();
//   msg.text = text;
//   window.speechSynthesis.speak(msg);
// }
// It is targetted by the button 'speak':

// <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>

//to extract only the numbers in the text:
// const handleNumExtract =()=>{
//     const regex = /[0-9/ /]/g;

//     const digits = text.match(regex);
//     const res = digits.join('');
//    setText(res)
//     };
