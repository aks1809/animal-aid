import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../apis/axios";
import image1 from "../images/aboutus1.jpg";

import "../Style/Adopt.css";

function Adopt() {
  const [adopts, setAdopts] = useState([]);
  useEffect(() => {
    axios
      .get("/adoptForm/sync")
      .then((response) => {
        console.log(response);
        setAdopts(response.data);
      })
      .catch(() => console.log("Promise rejected"));
  }, []);
  return (
    <div>
      <div
        className="jumbotron rounded-0 bg-dark banner m-0 p-0"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="title-bar bg-primary h1 text-white p-3 text-center rounded">
          Adopt
        </div>
      </div>
      <div className="jumbotron pt-3 mb-0">
        <div className="link mb-5">
          <Link to="/">Home</Link> &gt; <Link to="/howToHelp">How to help</Link>{" "}
          &gt; Adopt
        </div>
        <div className="row p-4">
          <div className="col-md-6">
            <div className="small-title text-uppercase font-weight-bold text-danger mb-2">
              Adopt
            </div>
            <div className="large-title mb-4 text-left">
              Open your heart to one of our rescued sweethearts today!
            </div>
          </div>
          <div className="col-md-6 text-justify section-description">
            <p>
              Some of the animals we rescue don’t have a home to go back to:
              they might be abandoned, orphans and too young to make it on their
              own, or they might come from difficult areas. They stay with us
              until they find a forever home.
            </p>
            <p>
              Have you fallen in love with one of the animals on this page? Read
              more about them and apply to adopt today! Adoptions are currently
              only available within India.
            </p>
          </div>
          <div className="card__detail adopt">
            <div className="row">
              {adopts.map((adopt) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={adopt._id}>
                  <div className="card card__width">
                    <img
                      className="card-img-top adopt-image"
                      src={process.env.PUBLIC_URL + `/uploads/${adopt.imgName}`}
                      alt="Card"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{adopt.name}</h5>
                      <p className="card-text">{adopt.details.substr(0, 30)}</p>
                      <Link
                        to={`/howToHelp/adopt/${adopt._id}`}
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
      </div>
    </div>
  );
}

export default Adopt;
