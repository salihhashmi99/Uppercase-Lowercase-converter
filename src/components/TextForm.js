import React, {useState} from 'react'
import PropTypes from 'prop-types'
//using the states (introducing hook)

export default function TextForm(props) {
    const [text,setText] = useState('Enter something here');
    //function to convert into Upper Case
    const HandleUpclick = () => {
        //best way to change the text in state
        //setText("You have clicked the Uppercase button");
        console.log("You have clicked the uppercase button");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted into uppercase","success");
    }
    //function to convert into lower case
    const HandleDownClick = () =>{
        console.log("You have clicked the lowercase button");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted into lowercase","success");
    }
    //function to clear the text
    const HandleClearClick = () =>{
        console.log("Aouch, You cleared the text");
        let newText = "";
        setText(newText);
        props.showAlert("Text has been cleared","success");
    }
    //function to copy the text
    const HandleCopyText = () =>{
        console.log("You copied the text");
        var newText=document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(text.value);
    }
    //function to change the text
    const HandleOnChanged = (event) =>{
        console.log("Text Changed");
        setText(event.target.value);
    }
    
    return (
        <div className='container'>
            <div className="mb-3">
                <label HtmlFor="exampleFormControlTextarea1" className="form-label">{props.Example}</label>
                <textarea className="form-control my-3" value={text}  
                onChange={HandleOnChanged} id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <div className='mb-3'>
                <button type="button" className="btn btn-primary mx-2" onClick={HandleUpclick} showAlert={props.showAlert}>
                Convert into Uppercase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={HandleDownClick}>
                Convert into Lowercase</button>
                <button type="button" className="btn btn-danger mx-2" onClick={HandleClearClick}>
                Clear Text</button>
                <button type="button" className="btn btn-success mx-2" onClick={HandleCopyText}>
                Copy Text</button>
                <button type="button" className="btn btn-warning mx-2">Enable Dark Mode</button>
            </div>

            <div className='container'>
                <h1>Text Summary</h1>
                <p>The text you enter into the text area contains {text.split(" ").length} words and {text.length} characters
                and It takes {0.008*text.split(" ").length} minutes to read this</p>
                <h1>Preview</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}
