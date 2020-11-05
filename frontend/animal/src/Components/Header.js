import React from "react";
import PetsIcon from "@material-ui/icons/Pets";
import { IconButton } from "@material-ui/core";
import "../Style/Header.css";
import { Link } from "react-router-dom";
import Login from "./Login";

function Header(){
  return(
    <div className="full" >
    <nav class="navbar navbar-expand-lg navbar-light ">
    <IconButton>
    <PetsIcon className="icon" />
    </IconButton>
  <a class="navbar-brand" href="/"><h1 className="title">Animal Aid</h1></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home Page <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">About Us</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/whatWeDo">What We Do</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/contact" >Conact Us</Link>
      </li>
      <li class="nav-item">
        <Login/>
      </li>
    </ul>
  </div>
</nav>
  </div>

  );
}

export default Header;
