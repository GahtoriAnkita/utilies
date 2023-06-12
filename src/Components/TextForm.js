import React, { useState } from 'react'


export function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " + Text);
        let newText = Text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }
    
    const handleLoClick = () => {
        // console.log("Lowercase was clicked: " + Text);
        let newText = Text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    }
    
    const handleClearClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text has been cleared","success")
    }
    
    const handleCopy = () =>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied","success")
        document.getSelection().removeAllRanges();
        
    }
    
    const changeColor = (number) => {
        let  color = ['red', 'blue', 'yellow', 'orange', 'green', 'black', 'pink', 'salmon', 'teal'];
        document.getElementById('myBox').style.color = color[number];
        props.showAlert("Text color has been changed","success")
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value); //for change of text
    }


    const [Text, setText] = useState('');
    const [show, setShow] = useState(false);


    const display=()=>{
        setShow(true)
    }
    // const [print, setPrint] = useState(true);
    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <h1 className="my-1">{props.heading}</h1>
                <div className="mb-2 my-3">
                    <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter text here' style={{backgroundColor:props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
                </div>
                <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button  disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button  disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
                <button  disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button  disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={() => changeColor(Math.floor(Math.random() * 5))}>Change Text Color</button>
            </div>
            <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
                <p>It take around {0.008 * Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read text.</p>
                {/* <h2>Preview</h2>
                <p className="form-control">{Text.length>0?Text:"Enter Something to preview it here"}</p> */}

               <button  className="btn btn-primary my-1" type='submit' onClick={display}>Preview</button>
               {
                show?<p className="form-control my-2">{Text.length>0?Text:"Nothing to preview it here "}</p>:""
               }
            </div>
        </>
    )
}

export default TextForm