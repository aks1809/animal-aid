import React, { useState } from "react";
import axios from "./axios";
import "../Style/Rescue.css";

function AdoptCarousel() {
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    console.log({ fileName });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      await axios.post("/adoptForm/new", {
        name: input3,
        details: input4,
        imgName: fileName,
      });
    } catch (err) {
      if (err.response.status === 500) {
        console.log("Server Problem");
      } else {
        console.log(err.response.data);
      }
    }
    setFileName("");
    setInput3("");
    setInput4("");
    e.preventDefault();
  };

  return (
    <div className="form-padding">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <h3>Name</h3>
          <input
            className="form-control"
            value={input3}
            onChange={(e) => setInput3(e.target.value)}
            type="text"
            name="name"
            required
          ></input>
          <h3>Details</h3>
          <input
            className="form-control"
            value={input4}
            onChange={(e) => setInput4(e.target.value)}
            name="detail"
            type="text"
            required
          ></input>
          <br />
          <br />
          <input type="file" onChange={onChange} />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default AdoptCarousel;
