import React from 'react';
import { Link } from 'react-router-dom';
import logo_white from './download_white.svg';
import logo_black from './download_black.svg';
import PropTypes from 'prop-types';


export default function Navbar(props) {

  function text_color() {
    if (props.mode === 'dark') {
      return 'light'
    }
    else {
      return 'dark'
    }
  }

  function img_color() {
    if (props.mode === 'light') {
      return logo_white
    }
    else {
      return logo_black
    }
  }



  // function change_text() {
  //   // props.toggle_mode
  //   if (document.getElementById("dark_mode_button").innerText === 'DARK Mode') {
  //     document.getElementById("dark_mode_button").innerText = 'LIGHT Mode'
  //   }
  //   else {
  //     document.getElementById("dark_mode_button").innerText = 'DARK Mode'
  //   }
  // }



  return (

    <nav className={`navbar navbar-expand navbar-${props.mode} bg-${props.mode} `}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}
          {/* added a bg-light tag so img displays correclty in dark mode  */}
          <img className="ms-2 bg-light" src={`${img_color()}`} alt="" width="45" height="auto" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Other Cool Stuf
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Image_Enhancer</a></li>
                <li><a className="dropdown-item" href="#">Another Tic_Tac_Toe</a></li>
                {/* <li className="dropdown-divider"></li> */}
                <li><a className="dropdown-item" href="#"> Corrupt_A_File</a></li>
              </ul>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">About</a>
            </li> */}


          </ul>
          {/* <div className={`form-check form-switch text-${text_color()}`} id="dark_mode_button">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
              onClick={props.toggle_mode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DARK Mode</label>
          </div> */}

        </div>
        {/* <ul className="navbar-nav p-1 ms-auto mb-2 mb-lg-0">
          <div className="btn-group dropstart">
            <button type="button" className="btn  dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown" aria-expanded="false">
              <span className="visually-hidden">Toggle Dropstart</span>
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" href="#" >Danger</button>
              </li>
              <li><button className="dropdown-item" href="#" >Info</button>
              </li>
              <li><button className="dropdown-item" href="#" >Success</button>
              </li>
            </ul>
            <button type="button" className="btn" >
              Dark Mode Select
            </button>
          </div>
          </ul> */}
        <div className={`form-check form-switch text-${text_color()}`}>
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggle_mode} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Dark Mode</label>
        </div>
      </div>
    </nav>
  )
}

