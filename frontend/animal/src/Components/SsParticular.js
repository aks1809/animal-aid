import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import image1 from "../images/story3.jpg";
import axios from "../apis/axios";
import "../Style/Story.css";
import "../Style/AboutUs.css";

function SsParticular() {
  const [storyName, setStoryName] = useState("");
  const [storyDescription, setStoryDescription] = useState("");
  const [stories, setStories] = useState([]);
  const { storyId } = useParams();
  useEffect(() => {
    if (storyId) {
      axios
        .get(`/successStories/${storyId}`)
        .then((response) => {
          setStoryName(response.data.title);
          setStoryDescription(response.data.description);
        })
        .catch(() => console.log("Promise rejected"));
    }
  }, [storyId]);

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
          {storyName}
        </div>
      </div>
      <div className="jumbotron pt-3 mb-0 detail2">
        <div className="link mb-5 text-black text-left">
          <Link to="/">Home</Link> &gt;{" "}
          <Link to="/successStories">Success stories</Link> &gt; {storyName}
        </div>
        SUCCESS STORIES
      </div>
      <div className="detail">
        <h1>{storyName}</h1>
        {stories.map((story) => (
          <div key={story._id} className="d-flex justify-content-center">
            {story._id === storyId ? (
              <img
                className="center__image"
                src={process.env.PUBLIC_URL + `/uploads/${story.imgName}`}
                alt="card"
              />
            ) : null}
          </div>
        ))}
        <p>{storyDescription}</p>
      </div>
      <div className="d-flex justify-content-center">
        <Link className="linkButton linkButtonDetails" to="/successStories">
          Back to success stories
        </Link>
      </div>
    </div>
  );
}

export default SsParticular;
