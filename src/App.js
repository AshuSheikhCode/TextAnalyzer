import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextFrom";
import React, { useState } from "react";
// import About from "./components/About";
import Alert from "./components/Alert";

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // ... (the rest of your code remains unchanged)
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2b343d";
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "Text Analyzer - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
      document.title = "Text Analyzer - Home";
    }
  };

  const toggleMode1 = () => {
    if (mode === "light") {
      setMode("Greendark");
      document.body.style.backgroundColor = "#013220";
      showAlert("GreenDark Mode has been Enabled", "success");
      document.title = "Text Analyzer - GreenDark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
      document.title = "Text Analyzer - Home";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          // aboutText="About us"
          mode={mode}
          toggleMode={toggleMode}
          toggleMode1={toggleMode1}
        />
        <Alert alert={alert} />
        <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze"
                mode={mode}/>
        {/* <Routes> */}
          {/* <Route  exact path="/" element=}/> */}
          {/* <Route  exact path="/about" element={<About/>}/> */}
        {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
