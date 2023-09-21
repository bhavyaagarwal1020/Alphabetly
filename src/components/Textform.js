import React, {useState, useEffect} from 'react'

export default function Textform(props) {
 
    const handleUpperClick =()=>{
        console.log("done");
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handleLowerClick =()=>{
        console.log("done");
        let newtext=text.toLowerCase();
        setText(newtext);
    }
       
    const handleOnChange =(event)=>{
        console.log("ye bhi done");
        setText(event.target.value);
        
    }

    const [text,setText] = useState('original');
   useEffect(()=>{
		setText("updated text");
	}, [])

  return (
    <>
    <div className="container" style ={{color:props.mode ==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    
    <textarea className="form-control" onChange={handleOnChange} style = {{backgroundColor : props.mode ==='dark'?'#042743':'white', color:props.mode ==='dark'?'white':'#042743'}}id="myBox" value={text} rows="3" ></textarea>
  </div>
  <button className="btn btn-primary mx-2"  onClick={handleUpperClick}id="btn1">Convert To uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLowerClick}id="btn2">Convert To Lowercase</button>
  </div>
  <div className="container my-3" style ={{color:props.mode ==='dark'?'white':'#042743'}}>
    <h1>your sentence summary</h1>
    <p>{text.length} characters and {text.split(" ").length} words</p>
    <p>{0.008*text.split(" ").length} minutes read</p>
  </div>
  </>

  
  )
}
