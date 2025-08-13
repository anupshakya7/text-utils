import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Text Utils" aboutText="About Us"/>
      <div className="container my-4">
          {/* <TextForm heading="Enter the text to Analyze below"/>  */}
          <About/>
      </div>
      
    </>
  );
}

export default App;
