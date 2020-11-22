import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "../apis/axios";
import image1 from "../images/adopt1.jpg";
import "../Style/Story.css";

function AdoptParticular() {
  const [adoptName, setAdoptName] = useState("");
  const [adoptDescription, setAdoptDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { adoptId } = useParams();
  const [adopts, setAdopts] = useState([]);
  useEffect(() => {
    if (adoptId) {
      axios
        .get(`/howToHelp/adopt/${adoptId}`)
        .then((response) => {
          setAdoptName(response.data.name);
          setAdoptDescription(response.data.details);
          setImageUrl(response.data.imgName);
        })
        .catch(() => console.log("Promise rejected"));
    }
  }, [adoptId]);

  useEffect(() => {
    axios
      .get("/adoptForm/sync")
      .then((response) => {
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
        <div className=" bg-primary h1 text-white p-3 text-center rounded story d-flex align-items-center justify-content-center">
          {adoptName}
        </div>
      </div>
      <div className="jumbotron pt-3 mb-0 detail2">
        <div className="link mb-5 text-left text-black">
          <Link to="/">Home</Link> &gt; <Link to="/howToHelp">How To Help</Link>{" "}
          &gt; <Link to="/howToHelp/adopt">Adopt</Link> &gt; {adoptName}
        </div>
        Adopt {adoptName}
      </div>
      <div className="detail">
        <h1>{adoptName}</h1>
        {adopts.map((adopt) => (
          <div key={adopt._id}>
            {adopt._id === adoptId ? (
              <img
                className="center__image mb-4 mt-3 shadow-lg"
                src={process.env.PUBLIC_URL + `/uploads/${adopt.imgName}`}
                alt=""
              />
            ) : null}
          </div>
        ))}
        <p className="text-justify">{adoptDescription}</p>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <Link
          className="btn btn-outline-primary btn-lg mb-4"
          to="/howToHelp/adopt/adoptId/adoptionForm"
        >
          Adopt {adoptName}
        </Link>
        <Link
          className="btn btn-outline-dark btn-lg mb-4"
          to="/howToHelp/adopt"
        >
          Back to adopt page
        </Link>
      </div>
    </div>
  );
}

export default AdoptParticular;
