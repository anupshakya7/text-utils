import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from 'react';

function App() {
  const [mode,setMode] = useState('light');

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529e3';
      document.body.style.color = 'white';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
    
  }
  
  return (
    <>
      <Navbar title="Text Utils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-4">
          <TextForm heading="Enter the text to Analyze below" mode={mode}/> 
          {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
