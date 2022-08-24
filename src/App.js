import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from "./components/Jumbotron";
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


// let num = 45
function App() {

  const [mode, setmode] = useState('light')
  const toggle_mode = () => {
    if (mode === 'dark') {
      setmode('light')
      document.body.style.backgroundColor = 'white'
    }
    else {
      setmode('dark')
      document.body.style.backgroundColor = 'grey'
    }

  }



  return (
    <>
      <Navbar title='Text_Customiser' mode={mode} toggle_mode={toggle_mode} />

      <Jumbotron mode={mode} toggle_mode={toggle_mode} />
      <About />




      {/* <Router>
        <Routes>


          <Route exact path="/" element={<Jumbotron mode={mode} toggle_mode={toggle_mode} />} />

          <Route exact path="/about" element={<About />} />

        </Routes>
      </Router> */}












      {/* <About/> */}

    </>
  );
}

export default App;
