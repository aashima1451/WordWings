import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  

  const [mode,setMode] =   useState("light");
  const [alert,setAlert] =   useState(null);

  const showAlert=(message,type)=>{
        setAlert({
          msg: message,
          type : type
        })     
        setTimeout(()=>{
          setAlert(null);
        },1500

        )

  }
  
  let toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = "#393646"
      showAlert("Dark mode has been enabled","success")
      
    }

    else{
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled","success")
     

    }
    

    
  }

  return (
    <>
<BrowserRouter>
<Navbar title="WordWings" mode={mode} toggleMode = {toggleMode} />
<Alert alert = {alert}/>

<div className='container my-3'>

<Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          
          < Route path="/"
            element= {<TextForm heading="Enter the text to analyse: " mode={mode}/>} /> 
          </Routes>
         
  </div>
  </BrowserRouter>
    </>
  );
} 

export default App;


