import React from "react";
import { Link } from "react-router-dom";
import image1 from "../images/donate1.jpeg";
import image2 from "../images/aboutus2.jpg";
import "../Style/AboutUs.css";

function Donate() {
  return (
    <div>
      <div
        className="jumbotron rounded-0 bg-dark banner m-0 p-0"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="title-bar bg-primary h1 text-white p-3 text-center rounded">
          Donate
        </div>
      </div>
      <div className="jumbotron pt-3 mb-0">
        <div className="link mb-5">
          <Link to="/">Home</Link> &gt; Donate
        </div>
        <div className="row p-4">
          <div className="col-md-6">
            <div className="small-title text-uppercase font-weight-bold text-danger mb-2">
              Donate
            </div>
            <div className="large-title mb-4 text-left">
              A small donation can cease the unwilling hunger strike.
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
      <div className="jumbotron bg-dark rounded-0 text-white mb-0">FORM</div>
      <div className="jumbotron py-2 mb-0">
        <div className="row p-4">
          <div className="col-md-6">
            <div className="large-title mb-4 text-left">
              There are more ways to give!{" "}
            </div>
          </div>
          <div className="col-md-6 text-justify section-description">
            <p>
              Become a monthly donor to support our work into the future, save
              an animal’s life in honor of a beloved pet, or buy a gift of
              beautiful jewelry in support of our work.
            </p>
          </div>
        </div>
      </div>
      <div className="jumbotron bg-white mb-0">
        <div className="row d-flex justify-content-between">
          <div className="col-xl-4 col-md-6 col-12 d-flex justify-content-center mb-5">
            <Link to="#" className="category-link">
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
        </div>
      </div>
    </div>
  );
}

export default Donate;
