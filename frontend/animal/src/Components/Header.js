import React, { useState, useEffect } from "react";
import image3 from "../images/logoHeader.png";
import "../Style/Header.css";
import { Link } from "react-router-dom";
import Login from "./Login";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 155) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  const navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("fixed-top");
  }
  return (
    <div className="full">
      <div className="heading">
        <Link to="/" className="logo">
          <img src={image3} alt="img" className="logoHeader" />
        </Link>
        <Link className="navbar-brand" to="/">
          <h1 className="title">Animal Aid</h1>
        </Link>
      </div>
      <nav
        id="navb"
        className={`navbar fix navbar-expand-lg navbar-light  ${navbarClasses.join(
          " "
        )}`}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home Page <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/whatWeDo">
                What we do
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/successStories">
                Success stories
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
          </ul>
          <span className="navbar-text">
            <Login />
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
