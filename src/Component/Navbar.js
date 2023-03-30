import React from "react";
import { Link } from "react-router-dom";

// import DarkModeToggle from "./DarkModeToggle";

import "./style.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-3 ">
        <div className="container-fluid">
          {/* style= {{fontSize:"2rem"}} use this also to change font size in js*/}
          <Link className="navbar-brand fs-3" to="/" rel="noreferrer">
            FingerTip News
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-3 mb-lg-0 fs-5">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item ">
                <Link className="nav-link " to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science"> Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            {/* eslint-disable-next-line             */}
            {/* <h1 className="text-center mb-3"> </h1>
                  
      <DarkModeToggle /> */}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
