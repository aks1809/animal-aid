import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import ErrorIcon from "@material-ui/icons/Error";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Style/DonationForm.css";

const DonationForm = () => {
  const [form, setForm] = useState({
    frequency: 1,
    amount: 1,
    dedicate: 0,
    dedicateFirstName: "",
    dedicateLastName: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
    pan: "",
  });
  const [data, setData] = useState({});
  const [firstnameBlur, setFirstnameBlur] = useState(0);
  const [dedicateFirstnameBlur, setDedicateFirstnameBlur] = useState(0);
  const [emailBlur, setEmailBlur] = useState(0);
  const amountInput = useRef(null);
  const [amount] = useState([500, 800, 1000, 2500, "Other Amount"]);
  const [diffAmount, setDiffAmount] = useState(800);
  const [res, setRes] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      setRes(true);
    };
    script.onerror = () => {
      setRes(false);
    };
    document.body.appendChild(script);
  }, [res]);

  useEffect(() => {
    const fetcher = async () => {
      const rzdata = await axios.post("/api/razorpay", {
        amount: parseInt(diffAmount) * 100,
      });
      setData({ amount: rzdata.data.amount, id: rzdata.data.id });
    };
    fetcher();
  }, [diffAmount]);

  async function displayRazorpay() {
    if (!res) {
      alert("Razorpay failed to load please refresh the page");
    }

    const options = {
      key: "rzp_test_kGHEKiVYhobBNU",
      amount: parseInt(diffAmount) * 100,
      currency: "INR",
      name: "Animal Aid",
      description: "Thank you for your donation",
      image: "https://i.ibb.co/gtcx3zp/logo-Header.png",
      order_id: data.id,
      handler: async function (response) {
        await axios.post("/api/donation/new", {
          ...form,
          amount: diffAmount,
          payment_id: response.razorpay_payment_id,
          order_id: response.razorpay_order_id,
          signature: response.razorpay_signature,
        });
        setForm({
          ...form,
          frequency: 1,
          amount: 1,
          dedicate: 0,
          dedicateFirstName: "",
          dedicateLastName: "",
          firstName: "",
          lastName: "",
          emailAddress: "",
          pan: "",
        });
        setAmountIndex(1);
        toast.success("Thank you for donation, check you mail");
      },
      prefill: {
        name: `${form.firstName + " " + form.lastName}`,
        email: form.emailAddress,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const setAmountIndex = async (index) => {
    setForm({ ...form, amount: index });
    if (index !== 4) {
      setDiffAmount(amount[index]);
    } else {
      setDiffAmount("");
      amountInput.current.focus();
    }
  };

  const diffFocusLost = () => {
    if (/^\d+$/.test(diffAmount) === false) {
      setDiffAmount(800);
      setAmountIndex(1);
    }
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
    displayRazorpay();
  };

  return (
    <div className="container p-5 form bg-white form-inner mx-auto">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label className="h4 mb-4 d-flex justify-content-center">
            I would like to donate
          </label>
          <div className="d-flex justify-content-center px-5">
            <div
              onClick={() => {
                setForm({ ...form, frequency: 0 });
              }}
              className={`container frequency-text p-3 border border-primary rounded-left selectors text-center h5 d-flex align-items-center ${
                form.frequency === 0 ? "selected" : ""
              }`}
            >
              Monthly
            </div>
            <div
              onClick={() => {
                setForm({ ...form, frequency: 1 });
              }}
              className={`container frequency-text p-3 border border-primary rounded-right selectors text-center h5 d-flex align-items-center ${
                form.frequency === 1 ? "selected" : ""
              }`}
            >
              One Time
            </div>
          </div>
        </div>
        <hr className="bg-primary my-5" />
        <div className="form-group">
          <div className="d-flex w-50 mx-auto amount-input">
            <div
              className="container p-3 border border-primary rounded-left text-center h5 font-weight-light bg-primary text-white"
              style={{ width: "100px" }}
            >
              &#x20B9;
            </div>
            <div className="container  p-0 border border-primary rounded-right text-center h5">
              <input
                type="text"
                className="form-control w-100 h-100 rounded-0"
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
                  <div className="col-lg-3 col-md-4 col-12 mb-2" key={index}>
                    <div
                      onClick={() => {
                        setAmountIndex(index);
                      }}
                      className={`container border border-primary p-1 py-3 rounded-lg text-center selector-menus ${
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
          <p className="h5 mb-4">Dedicate this amount</p>
          <div className="form-check form-check-inline mb-4">
            <label className="form-check-label h5 d-flex align-items-center">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                value="0"
                checked={form.dedicate === 1}
                onChange={() => {
                  setForm({ ...form, dedicate: 1 });
                }}
              />
              Yes, please
            </label>
          </div>
          &nbsp;
          <div className="form-check form-check-inline">
            <label className="form-check-label h5 d-flex align-items-center">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                value="1"
                checked={form.dedicate === 0}
                onChange={() => {
                  setForm({ ...form, dedicate: 0 });
                  setDedicateFirstnameBlur(0);
                }}
              />
              No, thank you
            </label>
          </div>
          {form.dedicate === 0 ? null : (
            <div>
              <p className="h5 mb-2 mt-3">Details:</p>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>
                    First Name <span className="text-primary">&#42;</span>{" "}
                  </label>
                  <input
                    className={`form-control border border-${
                      dedicateFirstnameBlur === 1 ? "danger" : "primary"
                    } py-4`}
                    placeholder="First Name"
                    value={form.dedicateFirstName}
                    onChange={(e) => {
                      setForm({ ...form, dedicateFirstName: e.target.value });
                    }}
                    onFocus={() => {
                      setDedicateFirstnameBlur(0);
                    }}
                    onBlur={() => {
                      if (form.dedicateFirstName === "") {
                        setDedicateFirstnameBlur(1);
                      }
                    }}
                    required
                  />
                  {renderError(dedicateFirstnameBlur)}
                </div>
                <div className="form-group col-md-6">
                  <label>Last Name</label>
                  <input
                    className="form-control border border-primary py-4"
                    placeholder="Last Name"
                    value={form.dedicateLastName}
                    onChange={(e) => {
                      setForm({ ...form, dedicateLastName: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>
          )}
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
              type="email"
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
        <div className="d-flex w-100">
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
