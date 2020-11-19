import React, { useState } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";
import image1 from "../images/aboutus1.jpg";
import "../Style/AboutUs.css";
import "../Style/Rescue.css";
import "../Style/AdoptionForm.css";

function AdoptionForm() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");
  const [input7, setInput7] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (input4 !== input5) {
      alert("please verify your entered email and confirmed email");
    } else if (input3.length > 10) {
      alert("Please enyer a valid phone number");
    } else {
      await axios.post("/adoptContactForm/new", {
        fname: input1,
        lname: input2,
        phone: input3,
        email: input4,
        cemail: input5,
        animal: input6,
        reason: input7,
      });
      setInput1("");
      setInput2("");
      setInput3("");
      setInput4("");
      setInput5("");
      setInput6("");
      setInput7("");
    }
  };

  return (
    <div>
      <div
        className="jumbotron rounded-0 bg-dark banner m-0 p-0"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="title-bar bg-primary h1 text-white p-3 text-center rounded">
          Adopt Form
        </div>
      </div>
      <div className="jumbotron pt-3 mb-0">
        <div className="link mb-5">
          <Link to="/">Home</Link> &gt; howToHelp>adopt>adoptionForm
        </div>
        <div className="row p-4">
          <div className="col-md-6">
            <div className="small-title text-uppercase font-weight-bold text-danger mb-2">
              Adopt Form
            </div>
            <div className="large-title mb-4 text-left">
              Adoption Contact Form
            </div>
          </div>
        </div>
        <p>
          Fill the form below and our adoption team will contact within a few
          days.
        </p>
        <h4>Please note that our animals can be adopted only in India</h4>
      </div>
      <div className="form-padding">
        <form onSubmit={onSubmit}>
          <div class="form-group form-group1">
            <h3>First Name</h3>
            <input
              class="form-control form-control1"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              type="text"
              required
            ></input>
            <h3>Last Name</h3>
            <input
              class="form-control form-control1"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              type="text"
              required
            ></input>
            <h3>Phone Number</h3>
            <input
              class="form-control form-control1"
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
              type="text"
              required
            ></input>
            <h3>Email Address</h3>
            <input
              class="form-control form-control1"
              value={input4}
              onChange={(e) => setInput4(e.target.value)}
              type="email"
              required
            ></input>
            <h3>Confirm Email Adress</h3>
            <input
              class="form-control form-control1"
              value={input5}
              onChange={(e) => setInput5(e.target.value)}
              type="email"
              required
            ></input>
            <h3>Who would you like to adopt?</h3>
            <input
              class="form-control form-control1"
              value={input6}
              onChange={(e) => setInput6(e.target.value)}
              type="text"
              required
            ></input>
            <h3>Why would yo like to adopt an animal from animal aid?</h3>
            <textarea
              className="form-control additional"
              value={input7}
              onChange={(e) => setInput7(e.target.value)}
              type="text"
              required
            />
            <br />
            <br />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AdoptionForm;
