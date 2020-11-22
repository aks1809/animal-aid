import React from "react";
import { Link } from "react-router-dom";
import image3 from "../images/whatWeDo9.jpg";
import image4 from "../images/Rescue1.jpg";
import image5 from "../images/Cruelty1.jpg";
import image6 from "../images/Cruelty2.jpg";
import image7 from "../images/Cruelty3.jpg";
import "../Style/Rescue.css";
import "../Style/AboutUs.css";

function Cruelty() {
  return (
    <div>
      <div
        className="jumbotron rounded-0 bg-dark banner m-0 p-0"
        style={{ backgroundImage: `url(${image3})` }}
      >
        <div className="title-bar bg-primary h1 text-white p-3 text-center rounded">
          Cruelty Response
        </div>
      </div>
      <div className="jumbotron pt-3 mb-0">
        <div className="link mb-5">
          <Link to="/">Home</Link> &gt; <Link to="/whatWeDo">What We Do</Link>{" "}
          &gt; Cruelty Response
        </div>
        <div className="row p-4">
          <div className="col-md-6">
            <div className="small-title text-uppercase font-weight-bold text-danger mb-2">
              Cruelty Response
            </div>
            <div className="large-title mb-4 text-left">
              Acting fast to stop abuse
            </div>
          </div>
          <div className="col-md-6 text-justify section-description">
            <p>
              Animal Aid receives reports about mistreatment of animals in
              Udaipur that we respond to in a variety of ways depending on the
              severity, ranging from verbal warning and education to involving
              the police.
            </p>
          </div>
        </div>
      </div>
      <div
        className="rescue__top"
        style={{ backgroundImage: `url(${image4})` }}
      >
        <div className="rescue__top__text">
          <h1 className="text-center">Stopping Animal Abuse.</h1>
          <br />
          <p className="text-justify">
            On a weekly and sometimes daily basis, we receive calls on our
            helpline informing us about an animal being intentionally mistreated
            or even killed. Our Cruelty Response team immediately investigates
            every cruelty report we receive with our first action being to take
            any animal out of immediate harm's way. If a law has been violated,
            we report it to the police.
          </p>
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
              Creating Awarenwss
            </h1>
            <p>
              Our goal in cruelty response is not only to stop the abusers, but
              to raise awareness in the community about the laws that protect
              animals, and that by speaking out cruelty can be stopped.
              Newspaper coverage has been an effective way to increase
              awareness. It's very rare that someone reporting cruelty is
              willing to speak directly to the police, as they may be a neighbor
              or family member of the abuser and not feel comfortable, but with
              more awareness more people are willing to speak out.
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
            style={{ backgroundImage: `url(${image6})` }}
          />
          <div className="col-lg-6 col-sm-12 p-4 text-center d-flex flex-column justify-content-center align-items-center description-box">
            <h1
              className="text-primary"
              style={{ fontFamily: "Balsamiq Sans" }}
            >
              Lodging cruelty complaint with police
            </h1>
            <p>
              Reporting cruelty cases to the police can be a lengthy process.
              The police are often not familiar with animal protection laws and
              can be reluctant to take the report. However, with years of
              working with the local police stations and persistence, the police
              are more receptive and aware and the process of registering
              cruelty cases is more and more streamlined.
            </p>
            <br />
            <Link className="btn btn-primary p-3 hover-buttons" to="/whatWeDo">
              Learn more about what we do
            </Link>
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
              When street dogs are in eminent danger
            </h1>
            <p>
              If a street dog bites someone, the generally peaceful coexistence
              between street dogs and their human neighbors can suddenly turn.
              Fear of a dog can turn to anger that can lead to someone beating
              or poisoning dogs in the area. Our immediate intervention is
              essential in restoring the peace. In these crises we conduct
              post-bite counseling to ensure proper medical attention for
              humans, on-site rabies vaccination to all dogs in the area,
              targeted spay and neuter and dog bite prevention education. We
              often bring the biting dog to Animal Aid for assessment as well as
              for their safety.
            </p>
            <br />
            <Link className="btn btn-primary p-3 hover-buttons" to="/whatWeDo">
              Learn more about what we do
            </Link>
          </div>
        </div>
      </div>
      <div className="rescue__vedio">
        <div className="rescue__vedio__detail">
          <h1>Treatment of animals in India.</h1>
          <br />
          <p>
            Like most places in the world, the treatment of animals in India has
            incredible highs and terrible lows. For example, street dogs are
            given legal protection and unlike in much of the Western world it is
            illegal to kill or remove them (illegal displacement and killing is
            sadly common but it can be legally stopped). Cows, despite being
            considered holy in much of India, are often abandoned on the road
            when they no longer produce milk where the only food they can find
            is plastic and garbage. They are slaughtered for meat and leather in
            many many parts of India in horrifying conditions.
          </p>
        </div>
        <iframe
          src="https://www.youtube.com/embed/SqOh_Q95lQQ"
          title="Iframe"
          className="Iframe"
        ></iframe>
      </div>
    </div>
  );
}

export default Cruelty;
