import React from "react";
import "../Style/HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="full__carousel">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
          data-interval="4000"
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
                    Animals are such agreeable friends—they ask no questions.
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

      <div className="row what__we__do">
        <div className="col-lg-6 col-sm-12 what__we__do__img__left">
          <img src="whatWeDo2.jpg" alt="" className="what__we__do__img" />
        </div>
        <div className="col-lg-6 col-sm-12 what__we__do__text__right">
          <h1>How we save street animals' lives</h1>
          <p>
            Every day we save animals with fractures, wounds, mange, viral
            diseases, cancer, and much more. We vaccinate against rabies and
            other illnesses, conduct spay and neuter and educate the community
            about helping animals.
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
            sponsoring an animal and more. With your help we rescue thousands of
            animals each year from desperate situations.
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

      <div className="row what__we__do">
        <div className="col-lg-6 col-sm-12 what__we__do__img__left">
          <img src="whatWeDo3.jpg" alt="" className="what__we__do__img" />
        </div>
        <div className="col-lg-6 col-sm-12 what__we__do__text__right">
          <h1>Visit or volunteer in our team shelter.</h1>
          <p>
            Volunteers are a life-sustaining force that enables us to give the
            best care to the most animals. We conduct 4 daily tours to share the
            stories of the animals we rescue, educate about the problems animals
            face and the different ways to help.
          </p>
          <br />
          <Link className="linkButton" to="/whatWeDo">
            Learn more about what we do
          </Link>
        </div>
      </div>

      <div className="success__stories">
        <div className="heading">
          <h1>Watch our hurt to healed stories</h1>
          <p>
            Incredible rescues, heartwarming recoveries, families reunited:
            watch the success stories that your support makes possible.
          </p>
        </div>

        <div className="card__detail">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <img className="card-img-top" src="whatWeDo1.jpg" alt="Card" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/" className="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <img className="card-img-top" src="whatWeDo3.jpg" alt="card" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="/" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="card">
                <img className="card-img-top" src="whatWeDo2.jpg" alt="Card" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="/" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12 ">
              <div className="card">
                <img className="card-img-top" src="whatWeDo1.jpg" alt="Card" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="/" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
