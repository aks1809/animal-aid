import React, { useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../images/contact1.jpg";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import "../Style/Contact.css";

function Contact() {
  const [dropdown, setDropdown] = useState(Array(7).fill(0));
  const [description] = useState([
    {
      title: "Report an ill or injured animal",
      body: (
        <span className="text-justify">
          <p>
            Click <Link to="#">here</Link> to report an ill or injured animal or
            cruelty to an animal in Udaipur. This helpline is for un-owned
            street animals in Udaipur, Rajasthan, only.
          </p>
        </span>
      ),
    },
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
    {
      title: "Adoption",
      body: (
        <span className="text-justify">
          <p>
            For questions about our adoption procedures, send us an email at{" "}
            <Link to="#">adoptions@animalaidunlimited.org</Link>.
          </p>
          <p>
            If you’re looking for more information on one of the dogs we have
            for <Link to="#">adoption</Link>, fill our{" "}
            <Link to="#">Adoption contact form</Link>.
          </p>
          <p>We currently only adopt dogs within India.</p>
        </span>
      ),
    },
    {
      title: "Job opportunities",
      body: (
        <span className="text-justify">
          <p>
            To apply for a current open position or a general application,
            please visit our <Link to="#">Career page</Link> and fill out the
            related form.
          </p>
          <p>
            For general inquiries on job opportunities, send us an email at{" "}
            <Link to="#">hr@animalaidunlimited.org</Link>.
          </p>
          <p>Please note that we do not accept applications via email.</p>
        </span>
      ),
    },
    {
      title: "Training",
      body: (
        <span className="text-justify">
          <p>
            To apply for our First Aid Training course, visit our{" "}
            <Link to="#">Training Program</Link> page and fill out the form
            online.
          </p>
          <p>
            For general inquiries about the training, send us an email at{" "}
            <Link to="#">training@animalaidunlimited.org</Link>.
          </p>
          <p>Please know that we do not accept applications via email.</p>
        </span>
      ),
    },
    {
      title: "Donations",
      body: (
        <span className="text-justify">
          <p>
            For questions about your donations or different donation methods,
            write to us at <Link to="#">donations@animalaidunlimited.org</Link>.
          </p>
        </span>
      ),
    },
    {
      title: "General enquiries",
      body: (
        <span className="text-justify">
          <p>
            For all other inquiries, including media, contact us at{" "}
            <Link to="#">info@animalaidunlimited.org</Link>.
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
            className="jumbotron jumbotron-fluid mb-0 py-4 px-1 d-flex justify-content-between bg-white"
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
              className={`font-weight-lighter mr-2 ${
                item === 1 ? "text-primary" : ""
              }`}
            >
              {description[index].title}
            </h3>
            <div className="d-flex align-items-center text-white">
              <div className="bg-primary p-1 rounded">
                {item === 0 ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowUpIcon />
                )}
              </div>
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
          <Link to="/">Home</Link> &gt; Contact
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
