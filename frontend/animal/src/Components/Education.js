import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image3 from "../images/whatWeDo7.jpg";
import image4 from "../images/Rescue1.jpg";
import image5 from "../images/Education1.jpg";
import image6 from "../images/Education2.jpg";
import image7 from "../images/Education3.jpeg";
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

function Education() {
  const [height, width] = useWindowSize();
  return (
    <div>
      <div
        className="jumbotron rounded-0 bg-dark banner m-0 p-0"
        style={{ backgroundImage: `url(${image3})` }}
      >
        <div className="title-bar bg-primary h1 text-white p-3 text-center rounded">
          Outreach And Education
        </div>
      </div>
      <div className="jumbotron pt-3 mb-0">
        <div className="link mb-5">
          <Link to="/">Home</Link> &gt; What We Do>Outreach And Education
        </div>
        <div className="row p-4">
          <div className="col-md-6">
            <div className="small-title text-uppercase font-weight-bold text-danger mb-2">
              Outreach And Education
            </div>
            <div className="large-title mb-4 text-left">
              Street animals depend on the community's protection
            </div>
          </div>
          <div className="col-md-6 text-justify section-description">
            <p>
              Rescuing street animals and providing a place where people can
              interact with animals teaches and inspires compassion. Recognizing
              animals who need help is something that can be learned, and when
              people are equipped with the knowledge of how to help they are
              more likely to act. We are teaching people to take action, whether
              by calling our rescue line or by taking our training course in
              First Aid; whether by making compassionate food choices or by
              volunteering.
            </p>
          </div>
        </div>
      </div>
      <div
        className="rescue__top"
        style={{ backgroundImage: `url(${image4})` }}
      >
        <div className="rescue__top__text">
          <h1>First Aid Training.</h1>
          <br />
          <p>
            Our First Aid Training program teaches dedicated animal protectors
            throughout India how to rescue animals and provide life-saving first
            aid in our week-long intensive course.
          </p>
        </div>
      </div>
      {width > 1000 || height > 800 ? (
        <div>
          <div className="row rescue__flip__flap">
            <div className="col-lg-6 col-sm-12 ">
              <img src={image5} className="rescue__img__left" alt="" />
            </div>
            <div className="col-lg-6 col-sm-12 rescue__text__right">
              <h1>Recognising problems save lives.</h1>
              <p>
                We educate the community about how to identify health problems
                so that minor issues don't become serious. For instance,
                applying medicated fly repellent can prevent wounds from getting
                infected with maggots. Treating wounds, mange and other
                conditions early is key to preventing suffering.
              </p>
              <br />
              <Link className="linkButton" to="/whatWeDo">
                Learn more about what we do
              </Link>
            </div>
          </div>
          <div className="row rescue__flip__flap">
            <div className="col-lg-6 col-sm-12 rescue__text__left">
              <h1>School kids to the rescue</h1>
              <p>
                Before Animal Aid, there was no helpline for street animals in
                Udaipur and we didn't know if anyone would even call. But
                thousands of children whose classrooms we visited learned and
                spread this message: when you see an injured or ill street
                animal, call Animal Aid to help. Today we have one of the
                busiest helplines in the country. We continue to educate
                children about how to save injured and ill street animals, and
                we also create awareness about other ways to help animals such
                as reporting cruelty, humane pet guardianship and the compelling
                reasons to go vegan.
              </p>
              <br />
              <Link className="linkButton" to="/whatWeDo">
                Learn more about what we do
              </Link>
            </div>
            <div className="col-lg-6 col-sm-12">
              <img src={image6} className="rescue__img__right" alt="" />
            </div>
          </div>
          <div className="row rescue__flip__flap">
            <div className="col-lg-6 col-sm-12 ">
              <img src={image7} className="rescue__img__left" alt="" />
            </div>
            <div className="col-lg-6 col-sm-12 rescue__text__right">
              <h1>Teaching compassion through rescue.</h1>
              <p>
                When we rescue an animal, a crowd often gathers and they witness
                an animal being treated with kindness. From saving our helpline
                number in their phones, to learning that conditions like mange
                are actually treatable, everyone's awareness grows. Most people
                who see an animal being rescued today are more likely to spot an
                animal tomorrow who needs help and report the problem.
              </p>
              <br />
              <Link className="linkButton" to="/whatWeDo">
                Learn more about hospitals
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="row rescue__flip__flap">
            <div className="col-lg-6 col-sm-12 ">
              <img src={image5} className="rescue__img__left" alt="" />
            </div>
            <div className="col-lg-6 col-sm-12 rescue__text__right">
              <h1>Recognising problems save lives.</h1>
              <p>
                We educate the community about how to identify health problems
                so that minor issues don't become serious. For instance,
                applying medicated fly repellent can prevent wounds from getting
                infected with maggots. Treating wounds, mange and other
                conditions early is key to preventing suffering.
              </p>
              <br />
              <Link className="linkButton" to="/whatWeDo">
                Learn more about what we do
              </Link>
            </div>
          </div>
          <div className="row rescue__flip__flap">
            <div className="col-lg-6 col-sm-12">
              <img src={image6} className="rescue__img__right" alt="" />
            </div>
            <div className="col-lg-6 col-sm-12 rescue__text__left">
              <h1>School kids to the rescue</h1>
              <p>
                Before Animal Aid, there was no helpline for street animals in
                Udaipur and we didn't know if anyone would even call. But
                thousands of children whose classrooms we visited learned and
                spread this message: when you see an injured or ill street
                animal, call Animal Aid to help. Today we have one of the
                busiest helplines in the country. We continue to educate
                children about how to save injured and ill street animals, and
                we also create awareness about other ways to help animals such
                as reporting cruelty, humane pet guardianship and the compelling
                reasons to go vegan.
              </p>
              <br />
              <Link className="linkButton" to="/whatWeDo">
                Learn more about what we do
              </Link>
            </div>
          </div>
          <div className="row rescue__flip__flap">
            <div className="col-lg-6 col-sm-12 ">
              <img src={image7} className="rescue__img__left" alt="" />
            </div>
            <div className="col-lg-6 col-sm-12 rescue__text__right">
              <h1>Teaching compassion through rescue.</h1>
              <p>
                When we rescue an animal, a crowd often gathers and they witness
                an animal being treated with kindness. From saving our helpline
                number in their phones, to learning that conditions like mange
                are actually treatable, everyone's awareness grows. Most people
                who see an animal being rescued today are more likely to spot an
                animal tomorrow who needs help and report the problem.
              </p>
              <br />
              <Link className="linkButton" to="/whatWeDo">
                Learn more about hospitals
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="rescue__vedio">
        <div className="rescue__vedio__detail">
          <h1>Compassion in action: Meet Kali and her care-giver.</h1>
          <br />
          <p>
            Kali is a street dog cared for by people in the neighborhood. Her
            caregiver saved her life by calling our helpline after she’d been
            hurt by a bike. Watch this video to see how happy Kali is when she
            returns home.
          </p>
        </div>
        <iframe
          src="https://www.youtube.com/embed/id2OHz_Z-FA"
          title="Iframe"
          className="Iframe"
        ></iframe>
      </div>
    </div>
  );
}

export default Education;
