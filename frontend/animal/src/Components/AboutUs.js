import React from "react";
import { Link } from "react-router-dom";
import image1 from "../images/aboutus1.jpg";
import image2 from "../images/Mission1.jpg";
import image3 from "../images/History1.webp";
import "../Style/AboutUs.css";

function AboutUs() {
  return (
    <div>
      <div
        className="jumbotron rounded-0 bg-dark banner m-0 p-0"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="title-bar bg-primary h1 text-white p-3 text-center rounded">
          About Us
        </div>
      </div>
      <div className="jumbotron pt-3 mb-0">
        <div className="link mb-5">
          <Link to="/">Home</Link> &gt; About us
        </div>
        <div className="row p-4">
          <div className="col-md-6">
            <div className="small-title text-uppercase font-weight-bold text-danger mb-2">
              About us
            </div>
            <div className="large-title mb-4 text-left">
              Working together to protect animals.
            </div>
          </div>
          <div className="col-md-6 text-justify section-description">
            <p>
              When our founders started AAU, they had no idea how vast the
              problems facing animals were. We grew over the years in an effort
              to meet as many challenges as we could.
            </p>
            <p>
              Today we rescue thousands of animals every year and we use their
              stories and our work to inspire and engage both the local
              community and people around the world.
            </p>
          </div>
        </div>
      </div>
      <div className="jumbotron bg-white mb-0">
        <div className="row d-flex justify-content-between">
          <div className="col-xl-4 col-md-6 col-12 d-flex justify-content-center mb-5">
            <Link to="/about/values" className="category-link">
              <div
                className="category-item"
                style={{ backgroundImage: `url(${image2})` }}
              >
                <div className="d-inline-flex border border-dark p-2 h5 text-white bg-dark label">
                  Our values and mission
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 col-12 d-flex justify-content-center mb-5">
            <Link to="/about/history" className="category-link">
              <div
                className="category-item"
                style={{ backgroundImage: `url(${image3})` }}
              >
                <div className="d-inline-flex border border-dark p-2 h5 text-white bg-dark label">
                  History Of AA.
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-4 col-md-6 col-12 d-flex justify-content-center mb-5">
            <Link to="/about/team" className="category-link">
              <div
                className="category-item"
                style={{ backgroundImage: `url(${image2})` }}
              >
                <div className="d-inline-flex border border-dark p-2 h5 text-white bg-dark label">
                  Meet the team.
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
