import React, { useState, useEffect } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function SuccessStories() {
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
    <div className="success__stories">
      <div class="row">
        {stories.map((story) => (
          <div className="card__detail">
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
                    Read More..
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuccessStories;
