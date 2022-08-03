import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('');
    const handleUpClick = ()=>{
        // console.log("upperCase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick = ()=> {
        // console.log("lowerCase was clicked " + text);
        let newText2 = text.toLowerCase();
        setText(newText2);
    }
    // const handleRedClick = ()=> {
    //     let newText2 = text.toLowerCase();
    //     setText(newText2);
    // }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
  return (
    <>
    <div className = "container" style={{color: props.mode==='light'?'#042743':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode==='light'?'white':'gray', color: props.mode==='light'?'#042743':'white'}} onChange={handleOnChange} value={text} rows="8"></textarea>
        <button className="btn btn-danger mx-2 my-3" onClick={handleUpClick}>CONVERT TO 'UPPERCASE'</button>
        <button className="btn btn-danger mx-2 my-3" onClick={handleLowerClick}>CONVERT TO 'LOWERCASE'</button>
        {/* <button className="btn btn-danger mx-2 my-3" onClick={handleRedClick}>GO RED'</button> */}
        </div>
    </div>
    <div className="container" style={{color: props.mode==='light'?'#042743':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Reading Time : {0.008 * text.split(" ").length} minutes </p>
        <h3>PREVIEW</h3>
        <p>{text.length>0?text:"Enter something to preview it"}</p>
    </div>
    </>
  )
}
