import React from "react";
import image3 from "../images/logoHeader.png";
import "../Style/Header.css";
import { Link } from "react-router-dom";
import Login from "./Login";

function Header() {
  return (
    <div className="full">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <Link to="/">
          <img src={image3} className="logoHeader" />
        </Link>
        <Link className="navbar-brand" to="/">
          <h1 className="title">Animal Aid</h1>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home Page <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item nav">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/whatWeDo">
                What We Do
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/success-stories">
                Success-Stories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/howToHelp">
                How to help
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Login />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
