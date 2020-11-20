import React, { useState, useEffect } from "react";
import "../Style/HomePage.css";
import { Link } from "react-router-dom";
import image1 from "../images/homePage1.png";
import image2 from "../images/homePage2.png";
import image3 from "../images/homePage3.png";
import image4 from "../images/homePage4.jpg";
import image5 from "../images/homePage5.jpg";
import image6 from "../images/homePage6.jpg";
import image7 from "../images/homePage7.jpg";
import image8 from "../images/homePage8.jpg";
import image9 from "../images/homePage9.jpg";
import image10 from "../images/homePage10.jpg";
import image11 from "../images/contactForm.jpg";
import Avatar from "@material-ui/core/Avatar";
import TrackVisibility from "react-on-screen";
import ContactForm from "./ContactForm";
import axios from "../apis/axios";

const ComponentToTrack1 = ({ isVisible, limit }) => {
  if (isVisible) {
    var i = 0;
    const id = document.getElementById("counter1");
    const counter = setInterval(() => {
      i += 5;
      id.innerHTML = i;
      if (i >= limit) {
        id.innerHTML = limit;
        clearInterval(counter);
      }
    }, 1);
  }
  return (
    <p className="text-white text-center large-numbers mb-0" id="counter1">
      0
    </p>
  );
};

const ComponentToTrack2 = ({ isVisible, limit }) => {
  if (isVisible) {
    var i = 0;
    const id = document.getElementById("counter2");
    const counter = setInterval(() => {
      i += 1;
      id.innerHTML = i;
      if (i >= limit) {
        id.innerHTML = limit;
        clearInterval(counter);
      }
    }, 1);
  }
  return (
    <p className="text-white text-center large-numbers mb-0" id="counter2">
      0
    </p>
  );
};

const ComponentToTrack3 = ({ isVisible, limit }) => {
  if (isVisible) {
    var i = 0;
    const id = document.getElementById("counter3");
    const counter = setInterval(() => {
      i += 1;
      id.innerHTML = i;
      if (i >= limit) {
        id.innerHTML = limit;
        clearInterval(counter);
      }
    }, 1);
  }
  return (
    <p className="text-white text-center large-numbers mb-0" id="counter3">
      0
    </p>
  );
};

function HomePage() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    axios
      .get("/successStories/sync")
      .then((response) => {
        setStories(response.data);
      })
      .catch(() => console.log("Promise rejected"));
  }, []);

  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide mb-2 shadow-lg"
        data-ride="carousel"
      >
        <div className="overlay"></div>
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="dull_layer"></div>
            <img src={image4} className="d-block w-100 cass_height" alt="" />
            <div className="carousel-caption d-none d-md-block text-white">
              <h1 className="font-weight-bold">Hello</h1>
              <p>Hi bro</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="dull_layer"></div>
            <img src={image5} className="d-block w-100 cass_height" alt="" />
            <div className="carousel-caption d-none d-md-block text-white">
              <h1 className="font-weight-bold">Hello</h1>
              <p>hi bro</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="dull_layer"></div>
            <img src={image6} className="d-block w-100 cass_height" alt="" />
            <div className="carousel-caption d-none d-md-block text-white">
              <h1 className="font-weight-bold">Hello</h1>
              <p>hi bro</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="dull_layer"></div>
            <img src={image10} className="d-block w-100 cass_height" alt="" />
            <div className="carousel-caption d-none d-md-block text-white">
              <h1 className="font-weight-bold">Hello</h1>
              <p>Hi bro</p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="jumbotron p-0 m-0 bg-white">
        <div className="row m-0">
          <div
            className="col-lg-6 col-sm-12 p-0 banner"
            style={{ backgroundImage: `url(${image8})` }}
          />
          <div className="col-lg-6 col-sm-12 p-4 text-center d-flex flex-column justify-content-center align-items-center description-box">
            <h1
              className="text-primary"
              style={{ fontFamily: "Balsamiq Sans" }}
            >
              How we save street animals' lives
            </h1>
            <p>
              Every day we save animals with fractures, wounds, mange, viral
              diseases, cancer, and much more. We vaccinate against rabies and
              other illnesses, conduct spay and neuter and educate the community
              about helping animals.
            </p>
            <br />
            <Link className="btn btn-primary p-3 hover-buttons" to="/whatWeDo">
              Learn more about what we do
            </Link>
          </div>
        </div>
        <div className="row m-0">
          <div
            className="d-lg-none col-sm-12 p-0 banner"
            style={{ backgroundImage: `url(${image7})` }}
          />
          <div className="col-lg-6 col-sm-12 p-4 text-center d-flex flex-column justify-content-center align-items-center description-box">
            <h1
              className="text-primary"
              style={{ fontFamily: "Balsamiq Sans" }}
            >
              So many ways to help
            </h1>
            <p>
              Become a proud member of our rescue team by making a donation,
              sponsoring an animal and more. With your help we rescue thousands
              of animals each year from desperate situations.
            </p>
            <br />
            <Link className="btn btn-primary p-3 hover-buttons" to="/whatWeDo">
              Learn more about what we do
            </Link>
          </div>
          <div
            className="col-lg-6 d-lg-block d-none p-0 banner"
            style={{ backgroundImage: `url(${image7})` }}
          />
        </div>
        <div className="row m-0">
          <div
            className="col-lg-6 col-sm-12 p-0 banner"
            style={{ backgroundImage: `url(${image9})` }}
          />
          <div className="col-lg-6 col-sm-12 p-4 text-center d-flex flex-column justify-content-center align-items-center description-box">
            <h1
              className="text-primary"
              style={{ fontFamily: "Balsamiq Sans" }}
            >
              Visit or volunteer in our team shelter
            </h1>
            <p>
              Volunteers are a life-sustaining force that enables us to give the
              best care to the most animals. We conduct 4 daily tours to share
              the stories of the animals we rescue, educate about the problems
              animals face and the different ways to help.
            </p>
            <br />
            <Link className="btn btn-primary p-3 hover-buttons" to="/whatWeDo">
              Learn more about what we do
            </Link>
          </div>
        </div>
      </div>
      <div className="success__stories">
        <div className="row heading">
          <div className="col-lg-6  col-sm-12">
            <h1>Watch our hurt to healed stories</h1>
          </div>
          <div className="col-lg-6 col-sm-12">
            <p>
              Incredible rescues, heartwarming recoveries, families reunited:
              watch the success stories that your support makes possible.
            </p>
          </div>
        </div>

        <div className="row">
          {stories.slice(0, 3).map((story) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={story._id}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={process.env.PUBLIC_URL + `/uploads/${story.imgName}`}
                  alt="Card"
                />
                <div className="card-body">
                  <h5 className="card-title">{story.title}</h5>
                  <p className="card-text">
                    {story.description.substr(0, 100)}
                  </p>
                  <Link
                    to={`/successStories/${story._id}`}
                    className="btn btn-primary card_button"
                  >
                    Read more..
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="jumbotron bg-white rounded-0 pt-4 mb-0">
        <h2 className="text-center mb-5 mt-4">Our numbers so far</h2>
        <div className="row">
          <div className="col-md-4 col-12 mb-4">
            <div className="container bg-primary p-5 small-png counter-divs">
              <Avatar className="mx-auto bg-dark mb-4">
                <img src={image1} alt="" />
              </Avatar>
              <TrackVisibility once partialVisibility>
                <ComponentToTrack1 limit={3213} />
              </TrackVisibility>
              <p className="text-center text-white h2">{"animals rescued"}</p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4">
            <div className="container bg-primary px-2 py-5 small-png counter-divs">
              <Avatar className="mx-auto bg-dark mb-4">
                <img src={image2} alt="" />
              </Avatar>
              <TrackVisibility once partialVisibility>
                <ComponentToTrack2 limit={498} />
              </TrackVisibility>
              <p className="text-center text-white h2">
                {"average daily number of animals at AA"}
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4">
            <div className="container bg-primary px-2 py-5 small-png counter-divs">
              <Avatar className="mx-auto bg-dark mb-4">
                <img src={image3} alt="" />
              </Avatar>
              <TrackVisibility once partialVisibility>
                <ComponentToTrack3 limit={655} />
              </TrackVisibility>
              <p className="text-center text-white h2">
                {"visitors and volunteers"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="jumbotron rounded-0 bg-dark contact mb-0"
        style={{ backgroundImage: `url(${image11})` }}
      >
        <div className="contact-form">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
