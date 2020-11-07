import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image3 from "../images/whatWeDo4.jpg";
import image4 from "../images/Rescue1.jpg";
import image5 from "../images/Medical1.jpg";
import image6 from "../images/Medical2.jpg";
import image7 from "../images/Medical.jpg";
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

function Medical() {
  const [height, width] = useWindowSize();
  return (
    <div>
      <div
        className="jumbotron rounded-0 bg-dark banner m-0 p-0"
        style={{ backgroundImage: `url(${image3})` }}
      >
        <div className="title-bar bg-primary h1 text-white p-3 text-center rounded">
          HOSPITAL AND MEDICAL
        </div>
      </div>
      <div className="jumbotron pt-3 mb-0">
        <div className="link mb-5">
          <Link to="/">Home</Link> &gt; What We Do>Hospital And Medical
        </div>
        <div className="row p-4">
          <div className="col-md-6">
            <div className="small-title text-uppercase font-weight-bold text-danger mb-2">
              Hospital And Medical
            </div>
            <div className="large-title mb-4 text-left">
              Medical care for street animals when they need it most
            </div>
          </div>
          <div className="col-md-6 text-justify section-description">
            <p>
              Our hospital provides medical treatment, loving care and a safe
              place for animals to recover. We treat about 450 animals of
              various species in our hospital each day.
            </p>
          </div>
        </div>
      </div>
      <div
        className="rescue__top"
        style={{ backgroundImage: `url(${image4})` }}
      >
        <div className="rescue__top__text">
          <h1>Medical Care</h1>
          <br />
          <p>
            We treat a wide variety of conditions: from road accident injuries,
            to skin diseases and wounds. Our medical team provides care to
            animals in our hospital anywhere from a few days to many months.
          </p>
        </div>
      </div>
      {width > 1000 || height > 800 ? (
        <div>
          <div class="row rescue__flip__flap">
            <div class="col-lg-6 col-sm-12 ">
              <img src={image5} className="rescue__img__left" alt="" />
            </div>
            <div class="col-lg-6 col-sm-12 rescue__text__right">
              <h1>Wounds, fractures and trauma care.</h1>
              <p>
                Our medical team cleans and bandages wounds, splints fractures,
                and treats infection, swelling and pain from morning until
                night. We provide large open spaces where recovering animals can
                socialize and exercise, and kennels and smaller enclosures for
                dogs and puppies who need quiet and bed rest. We vaccinate all
                of our rescued dogs against rabies, distemper, parvo and other
                viruses and spay and neuter them before returning them to their
                neighborhood.
              </p>
              <br />
              <Link className="linkButton" to="/whatWeDo">
                Learn more about what we do
              </Link>
            </div>
          </div>
          <div className="row rescue__flip__flap">
            <div className="col-lg-6 col-sm-12 rescue__text__left">
              <h1>Mange and other skin diseases</h1>
              <p>
                Medicine, baths, nutritious food, and lots of love heal dogs
                suffering from skin disease, most commonly mange. Dogs with
                mange usually take 4-6 weeks to fully recover depending on the
                severity. Even the most debilitated animals can heal, which we
                see in their transformations in both body and spirit every day.
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
          <div class="row rescue__flip__flap">
            <div class="col-lg-6 col-sm-12 ">
              <img src={image7} className="rescue__img__left" alt="" />
            </div>
            <div class="col-lg-6 col-sm-12 rescue__text__right">
              <h1>Viruses and other illnesses</h1>
              <p>
                Viruses like distemper and parvo are devastating to puppies on
                the street as well as animals suffering from weakened immunity.
                Animals with signs of infectious conditions stay in our
                isolation area and receive specialized care to help them
                recover.
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
          <div class="row rescue__flip__flap">
            <div class="col-lg-6 col-sm-12 ">
              <img src={image5} className="rescue__img__left" alt="" />
            </div>
            <div class="col-lg-6 col-sm-12 rescue__text__right">
              <h1>Wounds, fractures and trauma care.</h1>
              <p>
                Our medical team cleans and bandages wounds, splints fractures,
                and treats infection, swelling and pain from morning until
                night. We provide large open spaces where recovering animals can
                socialize and exercise, and kennels and smaller enclosures for
                dogs and puppies who need quiet and bed rest. We vaccinate all
                of our rescued dogs against rabies, distemper, parvo and other
                viruses and spay and neuter them before returning them to their
                neighborhood.
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
              <h1>Mange and other skin diseases</h1>
              <p>
                Medicine, baths, nutritious food, and lots of love heal dogs
                suffering from skin disease, most commonly mange. Dogs with
                mange usually take 4-6 weeks to fully recover depending on the
                severity. Even the most debilitated animals can heal, which we
                see in their transformations in both body and spirit every day.
              </p>
              <br />
              <Link className="linkButton" to="/whatWeDo">
                Learn more about what we do
              </Link>
            </div>
          </div>
          <div class="row rescue__flip__flap">
            <div class="col-lg-6 col-sm-12 ">
              <img src={image7} className="rescue__img__left" alt="" />
            </div>
            <div class="col-lg-6 col-sm-12 rescue__text__right">
              <h1>Viruses and other illnesses</h1>
              <p>
                Viruses like distemper and parvo are devastating to puppies on
                the street as well as animals suffering from weakened immunity.
                Animals with signs of infectious conditions stay in our
                isolation area and receive specialized care to help them
                recover.
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
          <h1>Watch Mary's incredible recovery.</h1>
          <br />
          <p>
            Weary and weaving with illness, this desperate girl was dying from
            mange when we rescued her. Mange is particularly dangerous for
            street dogs because when their itching becomes severe, they often
            become to agitated that they begin wandering without aim into other
            territories and neighborhoods where they cannot find food or rest.
            Mary is alive because a kind person called us and stayed with her,
            never letting her out of his sight until our ambulance arrived.
          </p>
        </div>
        <iframe
          src="https://www.youtube.com/embed/LqUK9-F1x-U"
          title="Iframe"
          className="Iframe"
        ></iframe>
      </div>
    </div>
  );
}

export default Medical;
