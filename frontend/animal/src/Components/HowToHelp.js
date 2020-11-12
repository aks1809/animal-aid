import React from "react";
import { Link } from "react-router-dom";
import image1 from "../images/aboutus1.jpg";
import image2 from "../images/HowToHelp2.jpg";
import image3 from "../images/HowToHelp3.jpg";
import image4 from "../images/HowToHelp4.jpg";
import "../Style/AboutUs.css";

function HowToHelp() {
  return (
    <div>
      <div
        className="jumbotron rounded-0 bg-dark banner m-0 p-0"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="title-bar bg-primary h1 text-white p-3 text-center rounded">
          HowToHelp
        </div>
      </div>
      <div className="jumbotron pt-3 mb-0">
        <div className="link mb-5">
          <Link to="/">Home</Link> &gt; How to help
        </div>
        <div className="row p-4">
          <div className="col-md-6">
            <div className="small-title text-uppercase font-weight-bold text-danger mb-2">
              How To Help
            </div>
            <div className="large-title mb-4 text-left">
              Your help will save lives today and far into the future.
            </div>
          </div>
          <div className="col-md-6 text-justify section-description">
            <p>
              Compassionate action can take many forms. Become a monthly donor
              for support that helps us plan for the future. Volunteer with us
              to directly help take care of the 700 animals at our shelter, or
              adopt one of our rescues. Sponsor an animal in our sanctuary,
              memorialize your beloved pet or leave a legacy for Animal Aid in
              your will.
            </p>
            <p>
              The animals need you, and we want to make it easy for you to turn
              your desire to help into powerful action that saves lives.
            </p>
          </div>
        </div>
      </div>
      <div className="jumbotron bg-white mb-0">
        <div className="row d-flex justify-content-between">
          <div className="col-xl-4 col-md-6 col-12 d-flex justify-content-center mb-5">
            <Link to="/donate" className="category-link">
              <div
                className="category-item"
                style={{ backgroundImage: `url(${image2})` }}
              >
                <div className="d-inline-flex border border-dark p-2 h5 text-white bg-dark label">
                  Donate
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 col-12 d-flex justify-content-center mb-5">
            <Link to="/howToHelp/adopt" className="category-link">
              <div
                className="category-item"
                style={{ backgroundImage: `url(${image3})` }}
              >
                <div className="d-inline-flex border border-dark p-2 h5 text-white bg-dark label">
                  Adopt An Animal
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 col-12 d-flex justify-content-center mb-5">
            <Link to="/about/team" className="category-link">
              <div
                className="category-item"
                style={{ backgroundImage: `url(${image4})` }}
              >
                <div className="d-inline-flex border border-dark p-2 h5 text-white bg-dark label">
                  Shop For Animals
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToHelp;
