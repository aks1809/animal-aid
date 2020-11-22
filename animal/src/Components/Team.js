import React from "react";
import { Link } from "react-router-dom";
import image3 from "../images/Team1.jpg";
import image4 from "../images/Team5.jpg";
import image5 from "../images/Team2.jpg";
import image6 from "../images/Team3.jpg";
import image7 from "../images/Team4.jpg";
import "../Style/Rescue.css";
import "../Style/AboutUs.css";

function Team() {
  return (
    <div>
      <div
        className="jumbotron rounded-0 bg-dark banner m-0 p-0"
        style={{ backgroundImage: `url(${image3})` }}
      >
        <div className="title-bar bg-primary h1 text-white p-3 text-center rounded">
          Our Team
        </div>
      </div>
      <div className="jumbotron pt-3 mb-0">
        <div className="link mb-5">
          <Link to="/">Home</Link> &gt; <Link to="/about">About Us</Link> &gt;
          Our Team
        </div>
        <div className="row p-4">
          <div className="col-md-6">
            <div className="small-title text-uppercase font-weight-bold text-danger mb-2">
              Our Team
            </div>
            <div className="large-title mb-4 text-left">
              These amazing people save lives everyday.
            </div>
          </div>
          <div className="col-md-6 text-justify section-description">
            <p>
              Our team of 100 incredible staff hail from nearby villages and
              distant cities. Each one performs vitally important jobs from
              dressing wounds to cleaning kennels; from rescuing to feeding.
              They provide gentle care, hard work in all seasons, and plenty of
              humor, making Animal Aid an incredibly cheerful working
              environment.
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
              Our Caregivers
            </h1>
            <p>
              Caregivers feed, shampoo, clean areas, and wrap their arms around
              animals one by one throughout each day. In addition to filling
              water bowls or changing bedding, they're often the first to notice
              changes in an animal's condition--they see who ate and who didn't
              they encourage first steps, report signs of improvement and always
              add love to the medicine.
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
              Our Rescue Team
            </h1>
            <p>
              From 7AM to midnight our 20 rescuers coax and comfort frightened
              animals, search under bushes, descend wells, climb trees--doing
              whatever it takes to rescue every suffering animal they can. Our 4
              dispatchers receive up to 150 calls each day, treating each call
              with importance and ensuring the rescue of the most urgently ill
              and injured patients first.
            </p>
          </div>
          <div
            className="col-lg-6 d-lg-block d-none p-0 banner"
            style={{ backgroundImage: `url(${image6})` }}
          />
        </div>
        <div className="row m-0">
          <div
            className="col-lg-6 col-sm-12 p-0 banner"
            style={{ backgroundImage: `url(${image7})` }}
          />
          <div className="col-lg-6 col-sm-12 p-4 text-center d-flex flex-column justify-content-center align-items-center description-box">
            <h1
              className="text-primary"
              style={{ fontFamily: "Balsamiq Sans" }}
            >
              Our Medical Team
            </h1>
            <p>
              Under the supervision of our medical director and supervisor, our
              team of nurses and assistants provide life-saving treatment to the
              450 ever-changing patients at the hospital and dogs in our Spay
              and Neuter Center, and even directly on the streets through the
              Street Treatment program. They perform sterilizations and other
              life-saving surgeries every day.
            </p>
          </div>
        </div>
      </div>
      <div className="rescue__vedio">
        <div className="rescue__vedio__detail">
          <h1>A tribute to our wonderful staff.</h1>
          <br />
          <p>
            Our founding family shares the dreams and philosophy that guides
            Animal Aid Unlimited
          </p>
        </div>
        <iframe
          src="https://www.youtube.com/embed/1xHbYqjZAgU"
          title="Iframe"
          className="Iframe"
        ></iframe>
      </div>
      <div className="Image" style={{ backgroundImage: `url(${image4})` }}>
        <div className="Values text-center text-white p-3 px-5">
          <h1 className="m-0 values_heading">A step to improve the world.</h1>
        </div>
      </div>
    </div>
  );
}

export default Team;
