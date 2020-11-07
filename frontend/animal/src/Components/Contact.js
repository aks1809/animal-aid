import React, { useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../images/contact1.jpg";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import "../Style/Contact.css";

function Contact() {
  const [dropdown, setDropdown] = useState(Array(1).fill(0));
  const [description] = useState([
    {
      title: "Visit and volunteer",
      body: (
        <span className="text-justify">
          <p>
            For all your questions about visiting and volunteering – including
            how to reach and opening hours – you can visit our{" "}
            <Link to="#">Plan a visit</Link> and <Link to="#">Volunteer</Link>{" "}
            pages. For any information you don’t find there, feel free to send
            us an email at{" "}
            <Link to="#">volunteering@animalaidunlimited.org</Link>.
          </p>
          <p>
            If you’re planning on volunteering for several weeks or more, or
            want to visit in a large group, give us a heads-up by filling out
            our <Link to="#">Volunteer contact form</Link>.
          </p>
        </span>
      ),
    },
  ]);
  function renderDropdowns() {
    const dropdownList = dropdown.map((item, index) => {
      return (
        <div className="dropdown-option" key={index}>
          <div
            className="jumbotron jumbotron-fluid mb-0 p-4 d-flex justify-content-between bg-white"
            onClick={() => {
              setDropdown(
                dropdown.map((e, i) => {
                  if (index !== i) {
                    return e;
                  } else {
                    return e === 0 ? 1 : 0;
                  }
                })
              );
            }}
          >
            <h3
              className={`font-weight-lighter ${
                item === 1 ? "text-primary" : ""
              }`}
            >
              {description[index].title}
            </h3>
            <div className="p-1 bg-primary rounded d-flex align-items-center">
              {item === 0 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </div>
          </div>
          {item === 0 ? null : (
            <div className="jumbotron jumbotron-fluid mb-0 p-2">
              {description[index].body}
            </div>
          )}
        </div>
      );
    });
    return dropdownList;
  }
  return (
    <div>
      <div
        className="jumbotron rounded-0 bg-dark banner m-0 p-0"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="title-bar bg-primary h1 text-white p-3 text-center rounded">
          Contact
        </div>
      </div>
      <div className="jumbotron pt-3 mb-0">
        <div className="link mb-5">
          <Link to="/">Home</Link> &gt; About us
        </div>
        <div className="row p-4">
          <div className="col-md-6">
            <div className="small-title text-uppercase font-weight-bold text-danger mb-2">
              Contact
            </div>
            <div className="large-title mb-4 text-left">
              Contact us for more information.
            </div>
          </div>
          <div className="col-md-6 text-justify section-description">
            <p>
              Find below our contact information and email addresses for your
              various questions and needs.
            </p>
          </div>
        </div>
      </div>
      <div className="jumbotron rounded-0 mb-0 bg-white">
        <div className="dropdown-container mx-auto">{renderDropdowns()}</div>
      </div>
    </div>
  );
}

export default Contact;
