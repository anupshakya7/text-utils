import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      });

      setTimeout(()=>{
        setAlert(null);
      },1500);
  }

  const removeBodyClasses =()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
  }

  const toggleMode = (cls) =>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    // if(mode === 'light'){
    //   setMode('dark');
    //   // document.title = 'TextUtils - Dark Mode';
    //   document.body.style.backgroundColor = '#212529e3';
    //   document.body.style.color = 'white';
    //   showAlert("Dark mode has been enabled","success");
    // }else{
    //   setMode('light');
    //   // document.title = 'TextUtils - Light Mode';
    //   document.body.style.backgroundColor = 'white';
    //   document.body.style.color = 'black';
    //   showAlert("Light mode has been enabled","success");
    // }
    
  }
  
  return (
    <>
    <Router>
       <Navbar title="Text Utils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-4">
        <Routes>
            <Route exact path="/" element={<TextForm heading="TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} showAlert={showAlert}/>}/>
            <Route exact path="/about" element={<About mode={mode}/>}/>
        </Routes>
          {/* <TextForm heading="Enter the text to Analyze below" mode={mode} showAlert={showAlert}/> 
          <About/> */}
      </div>
    </Router>
    </>
  );
}

export default App;
