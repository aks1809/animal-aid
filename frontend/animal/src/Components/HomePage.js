import React, { useState, useEffect } from "react";
import "../Style/HomePage.css";
import { Link } from "react-router-dom";
import axios from "./axios";

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
function HomePage() {
  const [height, width] = useWindowSize();
  const [stories, setStories] = useState([]);
  useEffect(() => {
    axios
      .get("/success-stories/sync")
      .then((response) => {
        console.log(response);
        setStories(response.data);
      })
      .catch(() => console.log("Promise rejected"));
  }, []);
  return (
    <div>
      <div className="full__carousel">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
          data-interval="4000"
          data-pause="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="home__page__carousel1">
                <div className="home__page__text">
                  <p>Street animals need our protection. Help them.</p>
                </div>
                <div className="home__page__img">
                  <img
                    className="home__page__carousel__img"
                    src="carousel1.jpg"
                    alt="dog-profile"
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="home__page__carousel2">
                <div className="home__page__text">
                  <p>They just need a gentle touch not ignorance.</p>
                </div>
                <div className="home__page__img">
                  <img
                    className="home__page__carousel__img"
                    src="carousel2.jpg"
                    alt="dog-profile"
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="home__page__carousel3">
                <div className="home__page__text">
                  <p>
                    Animals are such agreeable friends,they ask no questions.
                  </p>
                </div>
                <div className="home__page__img">
                  <img
                    className="home__page__carousel__img"
                    src="carousel3.jpg"
                    alt="dog-profile"
                  />
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="home__page__carousel2">
                <div className="home__page__text">
                  <p>
                    Until one has loved an animal, a part of one's soul remains
                    unawakened.
                  </p>
                </div>
                <div className="home__page__img">
                  <img
                    className="home__page__carousel__img"
                    src="animallove.webp"
                    alt="dog-profile"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {width > 1000 || height > 800 ? (
        <div>
          <div class="row what__we__do">
            <div class="col-lg-6 col-sm-12 what__we__do__img__left">
              <img src="whatWeDo2.jpg" alt="" className="what__we__do__img" />
            </div>
            <div class="col-lg-6 col-sm-12 what__we__do__text__right">
              <h1>How we save street animals' lives</h1>
              <p>
                Every day we save animals with fractures, wounds, mange, viral
                diseases, cancer, and much more. We vaccinate against rabies and
                other illnesses, conduct spay and neuter and educate the
                community about helping animals.
              </p>
              <br />
              <Link className="linkButton" to="/whatWeDo">
                Learn more about what we do
              </Link>
            </div>
          </div>

          <div className="row what__we__do">
            <div className="col-lg-6 col-sm-12 what__we__do__text__left">
              <h1>So many ways to help. </h1>
              <p>
                Become a proud member of our rescue team by making a donation,
                sponsoring an animal and more. With your help we rescue
                thousands of animals each year from desperate situations.
              </p>
              <br />
              <Link className="linkButton" to="/whatWeDo">
                Learn more about what we do
              </Link>
            </div>
            <div className="col-lg-6 col-sm-12 what__we__do__img__right">
              <img src="whatWeDo1.jpg" alt="" className="what__we__do__img" />
            </div>
          </div>

          <div class="row what__we__do">
            <div class="col-lg-6 col-sm-12 what__we__do__img__left">
              <img src="whatWeDo3.jpg" alt="" className="what__we__do__img" />
            </div>
            <div class="col-lg-6 col-sm-12 what__we__do__text__right">
              <h1>Visit or volunteer in our team shelter.</h1>
              <p>
                Volunteers are a life-sustaining force that enables us to give
                the best care to the most animals. We conduct 4 daily tours to
                share the stories of the animals we rescue, educate about the
                problems animals face and the different ways to help.
              </p>
              <br />
              <Link className="linkButton" to="/whatWeDo">
                Learn more about what we do
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <div class="row what__we__do">
            <div class="col-lg-6 col-sm-12 what__we__do__img__left">
              <img src="whatWeDo2.jpg" alt="" className="what__we__do__img" />
            </div>
            <div class="col-lg-6 col-sm-12 what__we__do__text__right">
              <h1>How we save street animals' lives</h1>
              <p>
                Every day we save animals with fractures, wounds, mange, viral
                diseases, cancer, and much more. We vaccinate against rabies and
                other illnesses, conduct spay and neuter and educate the
                community about helping animals.
              </p>
              <br />
              <Link className="linkButton" to="/whatWeDo">
                Learn more about what we do
              </Link>
            </div>
          </div>
          <div className="row what__we__do">
            <div className="col-lg-6 col-sm-12 what__we__do__img__right">
              <img src="whatWeDo1.jpg" alt="" className="what__we__do__img" />
            </div>
            <div className="col-lg-6 col-sm-12 what__we__do__text__left">
              <h1>So many ways to help. </h1>
              <p>
                Become a proud member of our rescue team by making a donation,
                sponsoring an animal and more. With your help we rescue
                thousands of animals each year from desperate situations.
              </p>
              <br />
              <Link className="linkButton" to="/whatWeDo">
                Learn more about what we do
              </Link>
            </div>
          </div>
          <div class="row what__we__do">
            <div class="col-lg-6 col-sm-12 what__we__do__img__left">
              <img src="whatWeDo3.jpg" alt="" className="what__we__do__img" />
            </div>
            <div class="col-lg-6 col-sm-12 what__we__do__text__right">
              <h1>Visit or volunteer in our team shelter.</h1>
              <p>
                Volunteers are a life-sustaining force that enables us to give
                the best care to the most animals. We conduct 4 daily tours to
                share the stories of the animals we rescue, educate about the
                problems animals face and the different ways to help.
              </p>
              <br />
              <Link className="linkButton" to="/whatWeDo">
                Learn more about what we do
              </Link>
            </div>
          </div>
        </div>
      )}

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

        <div class="row">
          {stories.slice(0, 3).map((story) => (
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card">
                <img
                  class="card-img-top"
                  src={process.env.PUBLIC_URL + `/uploads/${story.imgName}`}
                  alt="Card"
                />
                <div class="card-body">
                  <h5 class="card-title">{story.title}</h5>
                  <p class="card-text">{story.description.substr(0, 100)}</p>
                  <Link
                    to={`/success-stories/${story._id}`}
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
    </div>
  );
}

export default HomePage;
