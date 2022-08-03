// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';
// import {Routes} from 'react-router';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
  }
  const toggleMode = ()=> {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
      <Navbar title = "TextUtils" mode = {mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className = "container my - 3">
        <Textform heading = "Enter the text to analyse below:" mode = {mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}
//   return (
//     <Router>
//       <div>
//         <Navbar title = "TextUtils" aboutText = "About TextUtils" mode = {mode} toggleMode={toggleMode}/>
//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Routes>
         
//          <Route exact path="/" element= {<Textform heading = "Enter the text to analyse below:" mode = {mode}/>} />
         
//          <Route exact path="/About" element={<About h1 = "About US" text = "Hello World" />} /> 

//        </Routes>
//       </div>
//     </Router>
//   );
// }

export default App;
// "homepage": "https://raunak02.github.io/Text-Utils",