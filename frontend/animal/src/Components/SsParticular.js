import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "./axios";
import image1 from "../images/story3.jpg";
import "../Style/Story.css";

function SsParticular() {
  const [storyName, setStoryName] = useState("");
  const [storyDescription, setStoryDescription] = useState("");
  const [stories, setStories] = useState([]);
  const { storyId } = useParams();
  useEffect(() => {
    if (storyId) {
      axios
        .get(`/success-stories/${storyId}`)
        .then((response) => {
          setStoryName(response.data.title);
          setStoryDescription(response.data.description);
        })
        .catch(() => console.log("Promise rejected"));
    }
  }, [storyId]);

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
    <div>
      <div
        className="jumbotron rounded-0 bg-dark banner m-0 p-0"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className=" bg-primary h1 text-white p-3 text-center rounded story d-flex align-items-center justify-content-center">
          {storyName}
        </div>
      </div>
      <div className="jumbotron pt-3 mb-0 detail2">
        <div className="link mb-5 text-black text-left">
          <Link to="/">Home</Link> &gt;{" "}
          <Link to="/success-stories">Success stories</Link> &gt; {storyName}
        </div>
        SUCCESS STORIES
      </div>
      <div className="detail">
        <h1>{storyName}</h1>
        {stories.map((story) => (
          <div>
            {story._id === storyId ? (
              <img
                className="center__image"
                src={process.env.PUBLIC_URL + `/uploads/${story.imgName}`}
                alt="card"
              />
            ) : (
              <div></div>
            )}
          </div>
        ))}
        <p>{storyDescription}</p>
      </div>
      <Link className="linkButton linkButtonDetails" to="/success-stories">
        Back to success-stories
      </Link>
    </div>
  );
}

export default SsParticular;
