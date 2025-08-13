import React,{useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const handleUpClick = (event) =>{
        event.preventDefault();
        
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = (event) => {
        event.preventDefault();

        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = (event) =>{
        event.preventDefault();

        setText('');
    }

    const handleOnChange = (event) =>{
       console.log('On Change'); 
       setText(event.target.value);
    }

    return (
        <>
        <form className="card p-3">
            <h4 className="mb-4">{props.heading}</h4>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <div>
                <button type="submit" onClick={handleUpClick} className="btn btn-primary mx-1">
                    Convert to Uppercase
                </button>
                <button type="submit" onClick={handleLoClick} className="btn btn-primary mx-1">
                    Convert to Lowercase
                </button>
                 <button type="submit" onClick={handleClearClick} className="btn btn-primary mx-1">
                    Clear Text
                </button>
            </div>
        </form>
        <div className="container my-4">
            <h4>Your Text Summary</h4>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h5>Preview</h5>
            <p>{text}</p>
        </div>
        </>
        
    );
}
