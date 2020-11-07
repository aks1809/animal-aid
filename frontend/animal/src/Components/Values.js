import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image3 from "../images/Mission1.jpg";
import image4 from "../images/Medical.jpg";
import image5 from "../images/Mission2.jpg";
import image6 from "../images/Mission3.jpg";
import "../Style/Rescue.css";
import "../Style/AboutUs.css";

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

function Values() {
  const [height, width] = useWindowSize();
  return (
    <div>
      <div
        className="jumbotron rounded-0 bg-dark banner m-0 p-0"
        style={{ backgroundImage: `url(${image3})` }}
      >
        <div className="title-bar bg-primary h1 text-white p-3 text-center rounded">
          Our Values And Missions
        </div>
      </div>
      <div className="jumbotron pt-3 mb-0">
        <div className="link mb-5">
          <Link to="/">Home</Link> &gt; About Us>Our Values And Missions
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
              Udaipur who have become ill or injured, and through their rescue
              inspire a community to protect and defend the lives of all
              animals.
            </p>
          </div>
        </div>
      </div>

      {width > 1000 || height > 800 ? (
        <div>
          <div class="row rescue__flip__flap">
            <div class="col-lg-6 col-sm-12 ">
              <img src={image5} className="rescue__img__left" alt="" />
            </div>
            <div class="col-lg-6 col-sm-12 rescue__text__right">
              <h1>Compassion For All</h1>
              <p>
                We believe all animals deserve our compassion and protection. We
                are working for the day when all animals' lives are respected
                for their inherent value, whether dogs, chickens, cows or fish.
                Our planet is in crisis from over-consumption, and the use and
                abuse of animals contributes tremendously to the climate
                catastrophe and incalculable animal suffering. Rescue is our
                strategy to immediately relieve suffering and encourage the
                protection of all animals lives by sharing their incredible
                stories of recovery and healing.
              </p>
              <br />
            </div>
          </div>
          <div className="row rescue__flip__flap">
            <div className="col-lg-6 col-sm-12 rescue__text__left">
              <h1>A Safe Place For All </h1>
              <p>
                We are proud to employ nearly 100 wonderful people who mostly
                hail from nearby villages and come from a variety of
                backgrounds. We are passionate about maintaining a culture of
                respect within Animal Aid for all ethnicity, genders, sexual
                orientations and abilities. Volunteers from around the world
                help make Animal Aid a beautiful melting pot of diversity and
                inclusion for all.
              </p>
              <br />
            </div>
            <div className="col-lg-6 col-sm-12">
              <img src={image6} className="rescue__img__right" alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div class="row rescue__flip__flap">
            <div class="col-lg-6 col-sm-12 ">
              <img src={image5} className="rescue__img__left" alt="" />
            </div>
            <div class="col-lg-6 col-sm-12 rescue__text__right">
              <h1>Compassion For All</h1>
              <p>
                We believe all animals deserve our compassion and protection. We
                are working for the day when all animals' lives are respected
                for their inherent value, whether dogs, chickens, cows or fish.
                Our planet is in crisis from over-consumption, and the use and
                abuse of animals contributes tremendously to the climate
                catastrophe and incalculable animal suffering. Rescue is our
                strategy to immediately relieve suffering and encourage the
                protection of all animals lives by sharing their incredible
                stories of recovery and healing.
              </p>
              <br />
            </div>
          </div>
          <div className="row rescue__flip__flap">
            <div className="col-lg-6 col-sm-12">
              <img src={image6} className="rescue__img__right" alt="" />
            </div>
            <div className="col-lg-6 col-sm-12 rescue__text__left">
              <h1>A Safe Place For All </h1>
              <p>
                We are proud to employ nearly 100 wonderful people who mostly
                hail from nearby villages and come from a variety of
                backgrounds. We are passionate about maintaining a culture of
                respect within Animal Aid for all ethnicity, genders, sexual
                orientations and abilities. Volunteers from around the world
                help make Animal Aid a beautiful melting pot of diversity and
                inclusion for all.
              </p>
              <br />
            </div>
          </div>
        </div>
      )}

      <div className="Image" style={{ backgroundImage: `url(${image4})` }}>
        <div className="Values">
          <h1>In Bly,Help is on the way.</h1>
        </div>
      </div>
    </div>
  );
}

export default Values;
