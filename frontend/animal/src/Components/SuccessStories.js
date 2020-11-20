import React, { useState, useEffect } from "react";
import axios from "../apis/axios";
import image1 from "../images/aboutus1.jpg";
import { Link } from "react-router-dom";
import "../Style/AboutUs.css";

function SuccessStories() {
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
        className="jumbotron rounded-0 bg-dark banner m-0 p-0"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="title-bar bg-primary h1 text-white p-3 text-center rounded">
          Success Stories
        </div>
      </div>
      <div className="jumbotron pt-3 mb-0">
        <div className="link mb-5">
          <Link to="/">Home</Link> &gt; Success Stories
        </div>
        <div className="row p-4">
          <div className="col-md-6">
            <div className="small-title text-uppercase font-weight-bold text-danger mb-2">
              Success Stories
            </div>
            <div className="large-title mb-4 text-left">
              Watch the incredible stories of the amazing souls we save.
            </div>
          </div>
          <div className="col-md-6 text-justify section-description">
            <p>
              The most joyous experience at Animal Aid is witnessing the
              transformation of sick and injured animals. From the day these
              beautiful beings are admitted, sometimes with horrific injuries,
              we provide the medical treatment to recover, and the love and care
              to thrive.
            </p>
          </div>
        </div>
      </div>
      <div className="success__stories my-0">
        <div className="row">
          {stories.map((story) => (
            <div className="col-xl-4 col-md-6 col-12  d-flex justify-content-center my-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={process.env.PUBLIC_URL + `/uploads/${story.imgName}`}
                  alt="Card"
                />
                <div className="card-body">
                  <h5 className="card-title">{story.title}</h5>
                  <p className="card-text">{story.description.substr(0, 70)}</p>
                  <Link
                    to={`/successStories/${story._id}`}
                    className="btn btn-primary card_button"
                  >
                    Read More
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

export default SuccessStories;
