import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("UpperCase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to UpperCase", "success");
    }
    // const handleFupClick = () => {
    //     const word = text;
    //     const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    //     setText(capitalized);
    // }
    const handleLoClick = () => {
        // console.log("LowerCase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to LowerCase", "success");

    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText); //text cleared
        props.showAlert("Copied to clipBoard", "success");

    }
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied", "success");

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success");

    }
    // const changeDisplay = () => {
    //     setStyle("cont2");
    //     setStyle("closeDisplay");
    // }
    const handleOnChange = (event) => {
        // console.log("OnChange");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // const [style, setStyle] = useState("alert");
    // const [style2] = useState("closebtn");
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h2 className='mb-4'>{props.heading}</h2>
                <div className="my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{background: props.mode === 'dark'?'rgb(50 66 100)':'white', color: props.mode === 'dark'?'white':'black'}}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                {/* <button className="btn btn-primary mx-2" onClick={handleFupClick}>First word Capital</button> */}
            </div>
            <div className="container my-2" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h1>Your text summary</h1>
                {/* <div className={style}>
                    <span className={style2}></span>
                    <span className="closebtn" onClick={changeDisplay}>&times;</span>
                    <strong>Info!</strong> Please input a space in the end of your text to know the correct word count.
                </div> */}
                <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} minutes to read</p>
                <h3>Preview Text</h3>
                <p>{text.length>0?text:'Nothing to Preview!'}</p>
            </div>
        </>
    )
}
