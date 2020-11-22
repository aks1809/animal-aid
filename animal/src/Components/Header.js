import React, { useState, useEffect, useCallback, useRef } from "react";
import image3 from "../images/logoHeader.png";
import "../Style/Header.css";
import { Link } from "react-router-dom";
import Login from "./Login";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [height, setHeight] = useState();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    if (offset >= height) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [height]);

  const navbarButton = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const rendered_height = document.getElementById("logo_header").clientHeight;
    setHeight(rendered_height);
  }, [height, handleScroll]);

  const navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("fixed-top");
  }

  return (
    <div className="full">
      <div
        className="m-0 d-flex align-items-center overflow-hidden"
        id="logo_header"
      >
        <Link to="/" className="logo">
          <img src={image3} alt="img" className="logoHeader" />
        </Link>
        <Link className="navbar-brand" to="/">
          <h1 className="title">Animal Aid</h1>
        </Link>
      </div>
      <nav
        id="navb"
        className={`navbar fix navbar-expand-lg navbar-light shadow-lg ${navbarClasses.join(
          " "
        )}`}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={() => {
            setIsNavCollapsed(false);
          }}
          ref={navbarButton}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarText"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="/"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    navbarButton.current.click();
                  }
                }}
              >
                Home Page <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    navbarButton.current.click();
                  }
                }}
              >
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/whatWeDo"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    navbarButton.current.click();
                  }
                }}
              >
                What we do
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link "
                to="/successStories"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    navbarButton.current.click();
                  }
                }}
              >
                Success stories
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link "
                to="/howToHelp"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    navbarButton.current.click();
                  }
                }}
              >
                How to help
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link "
                to="/contact"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    navbarButton.current.click();
                  }
                }}
              >
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
