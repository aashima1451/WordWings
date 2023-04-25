import React, {useState} from 'react'


export default function TextForm(props) {

  const handleUpperClick =(event)=>{
     //console.log("Chal gaya" + text);
     let newText = text.toUpperCase();
     setText(newText);
     event.preventDefault();
  }
  const handlelowerClick =(event)=>{
    //console.log("Chal gaya" + text);
    let newText = text.toLowerCase();
    setText(newText);
    event.preventDefault();

 }

 const handleClearClick =(event)=>{
  //console.log("Chal gaya" + text);
  let newText = '';
  setText(newText);
  event.preventDefault();

}

const handleExtraSpaces = (event)=>{
  let words = text.split(' ');
  let joinedWords = '';
  // console.log(words);
  words.forEach((elem)=>{
      if(elem[0] != undefined){
          joinedWords += elem + " ";
          console.log(joinedWords);
          
      }
      event.preventDefault();
  })
  setText(joinedWords);
}

const copyText = (event) => {
  navigator.clipboard.writeText(text);
  event.preventDefault();
}


  const handleOnChange =(event)=>{
    //console.log("chal gaya part2" + text);
    setText(event.target.value);
  }


  const[text,setText] = useState('');
  //text = "new text";//wrong
  //setText("new text"); right
  return (
    <>
    <div className='container' style={{color: props.mode==='dark' ? "white" : "black" }}>
      <h1>{props.heading}</h1>
      <form>
      <div className="mb-3">
  <label form="myBox" className="form-label">start writing below</label>
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'? '#393646' : 'white' , color: props.mode==='light' ? 'black':'white'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className= "btn btn-primary mx-2 my-2" onClick={handleUpperClick}>Convert to UPPERCASE</button>
<button disabled={text.length===0} className= "btn btn-primary mx-2 my-2" onClick={handlelowerClick}>Convert to lowercase</button>
<button disabled={text.length===0} className= "btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear text</button>
<button disabled={text.length===0} className= "btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button disabled={text.length===0} className= "btn btn-primary mx-2 my-2" onClick={copyText}>Copy Text</button>

</form>
    </div>

    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Analysis</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p> Your text can be read in {0.07*text.split(" ").length} minutes</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
 
    </>  
  )
}
