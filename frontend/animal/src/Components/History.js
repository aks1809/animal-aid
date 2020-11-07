import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image3 from "../images/History1.webp";
import image4 from "../images/History6.jpg";
import image5 from "../images/History2.jpg";
import image6 from "../images/History3.jpg";
import image7 from "../images/History5.jpg";
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

function History() {
  const [height, width] = useWindowSize();
  return (
    <div>
      <div
        className="jumbotron rounded-0 bg-dark banner m-0 p-0"
        style={{ backgroundImage: `url(${image3})` }}
      >
        <div className="title-bar bg-primary h1 text-white p-3 text-center rounded">
          History of AA
        </div>
      </div>
      <div className="jumbotron pt-3 mb-0">
        <div className="link mb-5">
          <Link to="/">Home</Link> &gt; About Us>History Of AA
        </div>
        <div className="row p-4">
          <div className="col-md-6">
            <div className="small-title text-uppercase font-weight-bold text-danger mb-2">
              History Of AA
            </div>
            <div className="large-title mb-4 text-left">
              A dream to help street animals.
            </div>
          </div>
          <div className="col-md-6 text-justify section-description">
            <p>
              In 2002 our founding family established Udaipur's first and only
              shelter and hospital for ownerless animals. As word spread, a few
              rescue requests a week became more than 100 calls each day. Tens
              of thousands of animals have been rescued and saved, and the
              community's compassion has blossomed into action.
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
              <h1>From Seattle to Bareillly.</h1>
              <p>
                In 1994 Animal Aid’s founders Erika, Jim and daughter Claire
                began travelling from their home in Seattle, USA, to India,
                where they fell in love with the country, and especially the
                small city of Udaipur, Rajasthan. Their professions as
                consultants gave them flexibility, and loving Indian culture,
                they planned to gradually live in Udaipur. In 1999 they moved to
                a small village, started learning Hindi, and that's when they
                began to notice the often poor condition of street animals.
              </p>
              <br />
            </div>
          </div>
          <div className="row rescue__flip__flap">
            <div className="col-lg-6 col-sm-12 rescue__text__left">
              <h1>The First Step.</h1>
              <p>
                When they realised there were no services for ownerless animals
                in Udaipur, they contacted animal organizations around the
                world, and began to learn what they could do to help. This is
                when their life work of learning how to rescue animals, hiring
                and training staff, and raising funds for medicine and food
                began. In 2002 they hired a veterinarian and began training
                local villagers in animal care, rented a small piece of land and
                slowly started to rescue injured animals.
              </p>
              <br />
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
              <h1>Word Spread Throughout Bareilly.</h1>
              <p>
                Within a few months, our 40 kennels and two small paddocks
                became filled with rescued dogs, donkeys and cows. With no
                village phones, reports of animal problems reached us by word of
                mouth. But with the arrival of cell phones and thanks to ads in
                the newspapers, leaflet drops in schools and community groups,
                rescue requests multiplied. More than ever before, the lives of
                animals in Udaipur were being saved..
              </p>
              <br />
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
              <h1>From Seattle to Bareillly.</h1>
              <p>
                In 1994 Animal Aid’s founders Erika, Jim and daughter Claire
                began travelling from their home in Seattle, USA, to India,
                where they fell in love with the country, and especially the
                small city of Udaipur, Rajasthan. Their professions as
                consultants gave them flexibility, and loving Indian culture,
                they planned to gradually live in Udaipur. In 1999 they moved to
                a small village, started learning Hindi, and that's when they
                began to notice the often poor condition of street animals.
              </p>
              <br />
            </div>
          </div>
          <div className="row rescue__flip__flap">
            <div className="col-lg-6 col-sm-12">
              <img src={image6} className="rescue__img__right" alt="" />
            </div>
            <div className="col-lg-6 col-sm-12 rescue__text__left">
              <h1>The First Step.</h1>
              <p>
                When they realised there were no services for ownerless animals
                in Udaipur, they contacted animal organizations around the
                world, and began to learn what they could do to help. This is
                when their life work of learning how to rescue animals, hiring
                and training staff, and raising funds for medicine and food
                began. In 2002 they hired a veterinarian and began training
                local villagers in animal care, rented a small piece of land and
                slowly started to rescue injured animals.
              </p>
              <br />
            </div>
          </div>
          <div class="row rescue__flip__flap">
            <div class="col-lg-6 col-sm-12 ">
              <img src={image7} className="rescue__img__left" alt="" />
            </div>
            <div class="col-lg-6 col-sm-12 rescue__text__right">
              <h1>Word Spread Throughout Bareilly.</h1>
              <p>
                Within a few months, our 40 kennels and two small paddocks
                became filled with rescued dogs, donkeys and cows. With no
                village phones, reports of animal problems reached us by word of
                mouth. But with the arrival of cell phones and thanks to ads in
                the newspapers, leaflet drops in schools and community groups,
                rescue requests multiplied. More than ever before, the lives of
                animals in Udaipur were being saved..
              </p>
              <br />
            </div>
          </div>
        </div>
      )}
      <div className="rescue__vedio">
        <div className="rescue__vedio__detail">
          <h1>Let the animals be the teachers.</h1>
          <br />
          <p>
            Our founding family shares the dreams and philosophy that guides
            Animal Aid Unlimited
          </p>
        </div>
        <iframe
          src="https://www.youtube.com/embed/H4n9kTaHFuE"
          title="Iframe"
          className="Iframe"
        ></iframe>
      </div>
      <div className="Image" style={{ backgroundImage: `url(${image4})` }}>
        <div className="Values">
          <h1>Make the future bright for animals.</h1>
        </div>
      </div>
    </div>
  );
}

export default History;
