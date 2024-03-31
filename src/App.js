import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';



function App(props) {
  // nav bar 

  const [mode, setMode] = useState("light")

  const toggleBtn = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("you have changed light mode", "success")

    } else {
      setMode("dark")
      document.body.style.backgroundColor = "#343a40"
      showAlert("you have changed dark mode", "success")


    }
  }

  // Alert 

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }




  return (
    <>

      <Navbar title="Ramanath" mode={mode} cngModeBtn={toggleBtn} />
      <Alert alert={alert} />
      <About/>
    




      


    </>
  );
}

export default App;
