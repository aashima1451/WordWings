import React from 'react'
import { useState } from 'react'
import {FaLightbulb} from 'react-icons/fa'


export default function About(props) {

let mystyle = {
  color: props.mode === 'dark' ? 'white' : 'black',
  backgroundColor: props.mode === 'dark' ?'#393646':'white'
}

 return (
    <>
    <div className='container' style={mystyle}>
    <h1 className='my-4'>About Us</h1>
      <div className="accordion my-6" id="accordionExample" style={mystyle}>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        How WordWings Helps
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Editing and Formatting.</strong>  WordWings offers tools that allow you to
         edit and format text, which can be useful if you need to make changes to a document
          but don't have the software or expertise to do so. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        How to use WordWings
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Easy steps to use WordWings: </strong> This website is made to make your life easier. Here are the steps to use WordWings.
         <strong>step 1: </strong> Paste your text in the text box.
         <strong>step 2: </strong> Click on the buttons below to enhance and manupilate text
         <strong>step 3: </strong> Switch to Dark Mode for a better experience
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        More Help
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Your feedback is valuable to us : </strong> if You find any inconvenience please mail us at <strong>helpmeWordWings@gmail.com</strong>
      </div>
    </div>
  </div>
</div>
    </div>

   
    </>
  )
}
