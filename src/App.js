import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('light'); // Wheather dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1080);
  }


  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert(" Dark Mode Enable ", "success ");
      document.title = 'TextUtils - Dark mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode Enable ", "success ");
      document.title = 'TextUtils - Light mode';
    }
  }
  return (
    <>
      {/*<div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode={Mode} />
  </div>*/}
      <BrowserRouter>
      <Navbar title="TextUtiles" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <Routes>
          <Route excat path="/about" element={<About mode={Mode}/>} />
          <Route excat path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode={Mode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

