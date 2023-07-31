import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextFrom';
import React,{useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
 
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2b343d';
      showAlert("Dark Mode has been Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled","success");
    }
  }
  return (
    <>
 <Navbar title = "TextUtils" aboutText = "About us" mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
 <div className="container my-3">
 <TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode={mode}/>
 {/* <About/> */}
 </div>
    </>
  );
}

export default App;
