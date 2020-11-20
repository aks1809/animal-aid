import React from "react";
import { Link } from "react-router-dom";
import image3 from "../images/whatWeDo4.jpg";
import image4 from "../images/whatWeDo8.jpg";
import image5 from "../images/whatWeDo9.jpg";
import image6 from "../images/whatWeDo7.jpg";
import image7 from "../images/whatWeDo20.jpg";

import "../Style/AboutUs.css";

function WhatWeDo() {
  return (
    <div>
      <div
        className="jumbotron rounded-0 bg-dark banner m-0 p-0"
        style={{ backgroundImage: `url(${image7})` }}
      >
        <div className="title-bar bg-primary h1 text-white p-3 text-center rounded">
          What We Do
        </div>
      </div>
      <div className="jumbotron pt-3 mb-0">
        <div className="link mb-5">
          <Link to="/">Home</Link> &gt; What We do
        </div>
        <div className="row p-4">
          <div className="col-md-6">
            <div className="small-title text-uppercase font-weight-bold text-danger mb-2">
              What We Do
            </div>
            <div className="large-title mb-4 text-left">
              Helping street animals when they need us most.
            </div>
          </div>
          <div className="col-md-6 text-justify section-description">
            <p>
              We rescue street animals, provide medical care and sanctuary, and
              help turn community compassion into action.
            </p>
            <p>
              We combine on-the-ground, immediate relief to suffering animals
              with prevention to ensure long-term protection for animals.
            </p>
          </div>
        </div>
      </div>
      <div className="jumbotron bg-white mb-0">
        <div className="row d-flex justify-content-between">
          <div className="col-xl-4 col-md-6 col-12 d-flex justify-content-center mb-5">
            <Link to="/whatWeDo/rescue" className="category-link">
              <div
                className="category-item"
                style={{ backgroundImage: `url(${image4})` }}
              >
                <div className="d-inline-flex border border-primary p-2 h5 text-white bg-primary label">
                  Rescue
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 col-12 d-flex justify-content-center mb-5">
            <Link to="/whatWeDo/medical" className="category-link">
              <div
                className="category-item"
                style={{ backgroundImage: `url(${image3})` }}
              >
                <div className="d-inline-flex border border-primary p-2 h5 text-white bg-primary label">
                  Hospital And Medical Care
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 col-12 d-flex justify-content-center mb-5">
            <Link to="/whatWeDo/cruelty" className="category-link">
              <div
                className="category-item"
                style={{ backgroundImage: `url(${image5})` }}
              >
                <div className="d-inline-flex border border-primary p-2 h5 text-white bg-primary label">
                  Cruelty Response
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 col-12 d-flex justify-content-center mb-5">
            <Link to="/whatWeDo/education" className="category-link">
              <div
                className="category-item"
                style={{ backgroundImage: `url(${image6})` }}
              >
                <div className="d-inline-flex border border-primary p-2 h5 text-white bg-primary label">
                  Outreach And Education
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
