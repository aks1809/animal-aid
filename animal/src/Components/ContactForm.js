import React, { useState, useRef } from "react";
import ErrorIcon from "@material-ui/icons/Error";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "../apis/axios";
import "../Style/ContactForm.css";

const renderError = (isError) => {
  if (isError === 1) {
    return (
      <span className="text-danger">
        <ErrorIcon /> required
      </span>
    );
  }
};

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    query: "",
    token: "",
    userId: "231231232",
  });

  const [firstnameBlur, setFirstnameBlur] = useState(0);
  const [emailBlur, setEmailBlur] = useState(0);
  const [error, setError] = useState("");
  const [send, setSend] = useState(false);
  const reCaptcha = useRef();
  const formWrapper = useRef();

  const onSignUp = (e) => {
    e.preventDefault();
    if (!form.token) {
      setError("You must verify the captcha");
      window.scrollTo({
        behavior: "smooth",
        top: formWrapper.current.offsetTop,
      });
      return;
    }
    setError("");
    axios
      .post("/contactForm", form)
      .then(() => {
        reCaptcha.current.reset();
        setForm({ ...form, token: "" });
        setSend(true);
        setTimeout(() => setSend(false), 5000);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        reCaptcha.current.reset();
        setForm({
          firstName: "",
          lastName: "",
          emailAddress: "",
          query: "",
          token: "",
          userId: "231231232",
        });
      });
  };

  return (
    <div className="container bg-white p-5">
      <form onSubmit={(e) => onSignUp(e)} id="contactForm">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>
              First Name <span className="text-primary">&#42;</span>{" "}
            </label>
            <input
              className={`form-control border border-${
                firstnameBlur === 1 ? "danger" : "primary"
              } py-4`}
              placeholder="First Name"
              value={form.firstName}
              onChange={(e) => {
                setForm({ ...form, firstName: e.target.value });
              }}
              onFocus={() => {
                setFirstnameBlur(0);
              }}
              onBlur={() => {
                if (form.firstName === "") {
                  setFirstnameBlur(1);
                }
              }}
              required
            />
            {renderError(firstnameBlur)}
          </div>
          <div className="form-group col-md-6">
            <label>Last Name</label>
            <input
              className="form-control border border-primary py-4"
              placeholder="Last Name"
              value={form.lastName}
              onChange={(e) => {
                setForm({ ...form, lastName: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <label>
            Email Address <span className="text-primary">&#42;</span>
          </label>
          <input
            className={`form-control border border-${
              emailBlur === 1 ? "danger" : "primary"
            } py-4`}
            placeholder="Email Address"
            value={form.emailAddress}
            onChange={(e) => {
              setForm({ ...form, emailAddress: e.target.value });
            }}
            onFocus={() => {
              setEmailBlur(0);
            }}
            onBlur={() => {
              if (form.emailAddress === "") {
                setEmailBlur(1);
              }
            }}
            pattern="[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
            required
          />
          {renderError(emailBlur)}
        </div>
        <label>Enter your query</label>
        <textarea
          className="form-group border border-primary w-100 p-2 rounded-lg"
          rows="5"
          placeholder="Type here ..."
          value={form.query}
          onChange={(e) => {
            setForm({ ...form, query: e.target.value });
          }}
          wrap="soft"
        ></textarea>
        <div className="mb-3 captcha-wrapper" ref={formWrapper}>
          <ReCAPTCHA
            sitekey="6LdfAuIZAAAAAI4QNgmJXkSQLbTVZabLOdMVgoNx"
            onChange={(token) => {
              setForm({ ...form, token: token });
            }}
            ref={reCaptcha}
            onExpired={() => {
              setForm({ ...form, token: "" });
            }}
          />
          <span className="text-danger">{error}</span>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary p-3">
            <span className="h5">Ask the query</span>
          </button>
        </div>
        {send ? (
          <div className="text-center text-success mt-2">
            <CheckCircleIcon /> Your query is on it's way
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default ContactForm;
