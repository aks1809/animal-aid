import React, { useState, useEffect } from "react";
import axios from "../apis/axios";
import { Link } from "react-router-dom";

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
    <div className="success__stories">
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
                  Read More..
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuccessStories;
