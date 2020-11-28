import React from "react";
import { Link } from "react-router-dom";
import image3 from "../images/Mission1.jpg";
import image4 from "../images/Medical.jpg";
import image5 from "../images/Mission2.jpg";
import image6 from "../images/Mission3.jpg";
import "../Style/Rescue.css";
import "../Style/AboutUs.css";

function Values() {
  return (
    <div>
      <div
        className="jumbotron rounded-0 bg-dark banner m-0 p-0"
        style={{ backgroundImage: `url(${image3})` }}
      >
        <div className="title-bar bg-primary h1 text-white p-3 text-center rounded">
          Our Values And Mission
        </div>
      </div>
      <div className="jumbotron pt-3 mb-0">
        <div className="link mb-5">
          <Link to="/">Home</Link> &gt; <Link to="/about">About Us</Link> &gt;
          Our Values And Mission
        </div>
        <div className="row p-4">
          <div className="col-md-6">
            <div className="small-title text-uppercase font-weight-bold text-danger mb-2">
              Our Values And Mission
            </div>
            <div className="large-title mb-4 text-left">
              Rescue. Heal. Inspire.
            </div>
          </div>
          <div className="col-md-6 text-justify section-description">
            <p>
              Our mission is to rescue and treat the un-owned street animals of
              Udaipur who have become ill or are injured, and through their
              rescue inspire communities to protect and defend the lives of all
              animals.
            </p>
          </div>
        </div>
      </div>
      <div className="jumbotron p-0 m-0 bg-white">
        <div className="row m-0">
          <div
            className="col-lg-6 col-sm-12 p-0 banner"
            style={{ backgroundImage: `url(${image5})` }}
          />
          <div className="col-lg-6 col-sm-12 p-4 text-center d-flex flex-column justify-content-center align-items-center description-box">
            <h1
              className="text-primary"
              style={{ fontFamily: "Balsamiq Sans" }}
            >
              Compassion For All
            </h1>
            <p>
              We believe all animals deserve our compassion and protection. We
              are working for the day when all animals' lives are respected for
              their inherent value, whether dogs, cats, cows or any other
              animal. Our planet is in crisis from over-consumption, and the use
              and abuse of animals contributes tremendously to the climate
              catastrophe and incalculable animal sufferings. Rescue is our
              strategy to immediately relieve sufferings and encourage the
              protection of all animals lives by sharing their incredible
              stories of recovery and healing.
            </p>
          </div>
        </div>
        <div className="row m-0">
          <div
            className="d-lg-none col-sm-12 p-0 banner"
            style={{ backgroundImage: `url(${image6})` }}
          />
          <div className="col-lg-6 col-sm-12 p-4 text-center d-flex flex-column justify-content-center align-items-center description-box">
            <h1
              className="text-primary"
              style={{ fontFamily: "Balsamiq Sans" }}
            >
              A Safe Place For All
            </h1>
            <p>
              We are proud to employ nearly 100 wonderful people who mostly hail
              from nearby villages and come from a variety of backgrounds. We
              are passionate about maintaining a culture of respect within
              Animal Aid for all ethnicity, genders, sexual orientations and
              abilities. Volunteers from around the world help make Animal Aid a
              beautiful melting pot of diversity and inclusion for all.
            </p>
          </div>
          <div
            className="col-lg-6 d-lg-block d-none p-0 banner"
            style={{ backgroundImage: `url(${image6})` }}
          />
        </div>
      </div>
      <div className="Image" style={{ backgroundImage: `url(${image4})` }}>
        <div className="Values text-center text-white p-3 px-5">
          <h1 className="m-0 values_heading">
            In Bareilly,Help is on the way.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Values;
