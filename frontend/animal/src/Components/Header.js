import React from "react";
import PetsIcon from "@material-ui/icons/Pets";
import { IconButton } from "@material-ui/core";
import "../Style/Header.css";
import { Link } from "react-router-dom";
import Login from "./Login";

function Header() {
  return (
    <div className="full">
      <div className="header">
        <IconButton>
          <PetsIcon className="homeIcon" />
        </IconButton>
        <p className="title">Animal Aid</p>
      </div>

      <div className="Links">
        <Link className="Link" to="/">
          Home Page{" "}
        </Link>
        <Link className="Link" to="/about">
          {" "}
          About Us{" "}
        </Link>
        <Link className="Link" to="/whatWeDo">
          What We Do{" "}
        </Link>
        <Link className="Link" to="/contact">
          Conatct Us
        </Link>
        <Login />
      </div>
    </div>
  );
}

export default Header;
