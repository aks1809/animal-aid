import React, { useState } from "react";
import axios from "axios";
import "../Style/Rescue.css";

function StoryForm() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
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
      await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      await axios.post("/api/successStories/new", {
        title: input1,
        description: input2,
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
    setInput1("");
    setInput2("");
    e.preventDefault();
  };

  return (
    <div className="form-padding">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <h3>Title</h3>
          <input
            className="form-control"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            type="text"
            required
          ></input>
          <h3>Post</h3>
          <input
            className="form-control"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            type="text"
            required
          ></input>
          <br />
          <br />
          <input type="file" onChange={onChange} />
          <button className="btn btn-primary" type="submit">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}
export default StoryForm;
