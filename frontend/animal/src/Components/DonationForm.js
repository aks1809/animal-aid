import React, { useState, useRef } from "react";
import axios from "../apis/axios";
import ErrorIcon from "@material-ui/icons/Error";

const DonationForm = () => {
  const paymentMethodsName = [
    "Credit/Debit Card - UPI - Wallet - Net Banking",
    "Paytm",
    "Cheque",
  ];

  const [form, setForm] = useState({
    frequency: 1,
    amount: 1,
    paymentMethod: 0,
    firstName: "",
    lastName: "",
    emailAddress: "",
    pan: "",
  });

  const [firstnameBlur, setFirstnameBlur] = useState(0);
  const [emailBlur, setEmailBlur] = useState(0);

  const amountInput = useRef(null);

  const [amount] = useState([500, 800, 1000, 2500, "Other Amount"]);

  const [diffAmount, setDiffAmount] = useState(800);

  const setAmountIndex = (index) => {
    setForm({ ...form, amount: index });
    if (index !== 4) {
      setDiffAmount(amount[index]);
    } else {
      setDiffAmount("");
      amountInput.current.focus();
    }
  };

  const diffFocusLost = () => {
    if (diffAmount !== "") {
      amount.forEach((item, index) => {
        if (item === parseInt(diffAmount)) {
          setAmountIndex(index);
        }
      });
    } else {
      setAmountIndex(1);
    }
  };

  const renderError = (isError) => {
    if (isError === 1) {
      return (
        <span className="text-danger">
          <ErrorIcon /> required
        </span>
      );
    }
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/donate/new", {
      frequency: `${form.frequency === 0 ? "monthly" : "once"}`,
      amount: diffAmount,
      paymentMethod: paymentMethodsName[form.paymentMethod],
      firstName: form.firstName,
      lastName: form.lastName,
      emailAddress: form.emailAddress,
      pan: form.pan,
      userId: "2421knsadsa12312",
    });
  };

  return (
    <div className="container p-5 form bg-white">
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="frequency" className="h4 mb-4">
            I would like to donate
          </label>
          <div className="d-flex justify-content-center px-5">
            <div
              onClick={() => {
                setForm({ ...form, frequency: 0 });
              }}
              className={`container p-3 border border-primary rounded-left selectors text-center h5 ${
                form.frequency === 0 ? "selected" : ""
              }`}
            >
              Monthly
            </div>
            <div
              onClick={() => {
                setForm({ ...form, frequency: 1 });
              }}
              className={`container p-3 border border-primary rounded-right selectors text-center h5 ${
                form.frequency === 1 ? "selected" : ""
              }`}
            >
              One Time
            </div>
          </div>
        </div>
        <hr className="bg-primary my-5" />
        <div className="form-group">
          <div className="d-flex w-50 mx-auto">
            <div
              className="container p-3 border border-primary rounded-left text-center h5 font-weight-light bg-primary text-white"
              style={{ width: "100px" }}
            >
              &#x20B9;
            </div>
            <div className="container p-0 border border-primary rounded-right text-center h5">
              <input
                type="text"
                className="form-control w-100 h-100"
                value={diffAmount}
                ref={amountInput}
                onChange={(e) => {
                  setDiffAmount(e.target.value);
                }}
                onFocus={() => setAmountIndex(4)}
                onBlur={() => diffFocusLost()}
              />
            </div>
          </div>
          <div className="container mt-2">
            <div className="row">
              {amount.map((item, index) => {
                return (
                  <div className="col-3 mb-2" key={index}>
                    <div
                      onClick={() => {
                        setAmountIndex(index);
                      }}
                      className={`container border border-primary p-3 rounded-lg text-center selector-menus ${
                        index === form.amount ? "selected" : ""
                      }`}
                    >
                      {index !== 4 ? <span>&#x20B9;</span> : null} {item}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr className="bg-primary my-5" />
        <div className="form-group">
          <p className="h5 mb-4">Select Payment Method</p>
          <div className="form-check form-check-inline mb-4">
            <label className="form-check-label h5 d-flex align-items-center">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                value="0"
                checked={form.paymentMethod === 0}
                onChange={() => {
                  setForm({ ...form, paymentMethod: 0 });
                }}
              />
              Credit/Debit Card - UPI - Wallet - Net Banking
            </label>
          </div>
          <br />
          <div className="form-check form-check-inline">
            <label className="form-check-label h5 d-flex align-items-center">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                value="1"
                checked={form.paymentMethod === 1}
                onChange={() => {
                  setForm({ ...form, paymentMethod: 1 });
                }}
              />
              Paytm
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label h5 d-flex align-items-center">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                value="2"
                checked={form.paymentMethod === 2}
                onChange={() => {
                  setForm({ ...form, paymentMethod: 2 });
                }}
              />
              Cheque
            </label>
          </div>
        </div>
        <hr className="bg-primary my-5" />
        <div className="form-group">
          <p className="h5 mb-4">Personal Information</p>
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
          <div className="form-group">
            <label>PAN</label>
            <input
              className="form-control border border-primary py-4"
              placeholder="No PAN Entered"
              value={form.pan}
              onChange={(e) => {
                setForm({ ...form, pan: e.target.value });
              }}
            />
          </div>
        </div>
        <br />
        <div className="d-flex w-50">
          <div
            className="container p-3 border border-primary rounded-left text-center h5 font-weight-light bg-primary text-white"
            style={{ width: "400px" }}
          >
            Donation Total:
          </div>
          <div className="container p-0 border border-primary rounded-right text-center h5 font-weight-light d-flex justify-content-center align-items-center">
            <div>&#x20B9;{diffAmount === "" ? 800 : diffAmount}</div>
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary p-3">
            <span className="h5">Donate Now</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;
