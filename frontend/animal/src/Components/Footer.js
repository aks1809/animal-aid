import React from "react";
import "../Style/Footer.css";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CallIcon from "@material-ui/icons/Call";
import HomeIcon from "@material-ui/icons/Home";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="jumbotron p-5 mb-0 rounded-0 bg-dark">
        <div className="row">
          <div className="col-lg-5 px-4 mb-4">
            <div className="heading text-white h3 font-weight-bold">
              About Us
            </div>
            <hr className="bg-white" />
            <div className="description text-muted text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur adipisci labore id, laboriosam quam minima ipsum rem
              dolor amet molestias quos aspernatur saepe in dignissimos nisi
              consectetur
            </div>
            <br />
            <div className="author text-muted text-right">-Arpit Kher</div>
          </div>
          <div className="col-lg-3 px-4 mb-4">
            <div className="heading text-white h3 font-weight-bold">
              Keep Connected
            </div>
            <hr className="bg-white" />
            <div className="description-1 mx-auto">
              <div className="row">
                <div className="row px-3 py-1">
                  <Link
                    to="www.google.com"
                    className="d-flex align-items-center link"
                  >
                    <div className="col ml-3 facebook">
                      <Avatar>
                        <FacebookIcon />
                      </Avatar>
                    </div>
                    <div className="text-muted">Like us on Facebook</div>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="row px-3 py-1">
                  <Link
                    to="www.google.com"
                    className="d-flex align-items-center link"
                  >
                    <div className="col ml-3 twitter">
                      <Avatar>
                        <TwitterIcon />
                      </Avatar>
                    </div>
                    <div className="text-muted">Follow us on Twitter</div>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="row px-3 py-1">
                  <Link
                    to="www.google.com"
                    className="d-flex align-items-center link"
                  >
                    <div className="col ml-3 instagram">
                      <Avatar>
                        <InstagramIcon />
                      </Avatar>
                    </div>
                    <div className="text-muted">Follow us on Instagram</div>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="row px-3 py-1">
                  <Link
                    to="www.google.com"
                    className="d-flex align-items-center link"
                  >
                    <div className="col ml-3 youtube">
                      <Avatar>
                        <YouTubeIcon />
                      </Avatar>
                    </div>
                    <div className="text-muted">Suscribe on YouTube</div>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="row px-3 py-1">
                  <Link
                    to="www.google.com"
                    className="d-flex align-items-center link"
                  >
                    <div className="col ml-3 pinterest">
                      <Avatar>
                        <PinterestIcon />
                      </Avatar>
                    </div>
                    <div className="text-muted">Follow us on Pinterest</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 px-4 mb-4">
            <div className="heading text-white h3 font-weight-bold">
              Contact Information
            </div>
            <hr className="bg-white" />
            <div className="description-1 mx-auto">
              <div className="row">
                <div className="row px-3 py-1">
                  <Link
                    to="www.google.com"
                    className="d-flex align-items-center link"
                  >
                    <div className="col ml-3 call">
                      <Avatar>
                        <CallIcon />
                      </Avatar>
                    </div>
                    <div className="text-muted">+91-9988776655</div>
                  </Link>
                </div>
                <div className="row px-3 py-1">
                  <Link
                    to="www.google.com"
                    className="d-flex align-items-center link"
                  >
                    <div className="col ml-3 home">
                      <Avatar>
                        <HomeIcon />
                      </Avatar>
                    </div>
                    <div className="text-muted">Subhash Nagar, Bareilly</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="heading text-white h3 font-weight-bold mt-4">
              Suscribe to Newsletter
            </div>
            <hr className="bg-white" />
            <div className="container d-flex justify-content-center">
              <form
                action="suscribe"
                className="form-inline d-flex justify-content-center"
              >
                <div className="form-group mb-2 mr-1">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>
                <button type="submit" className="btn btn-primary mb-2">
                  Suscribe!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron jumbotron-flex rounded-0 bg-primary m-0 p-2 text-white text-center ">
        &#169; Designed by Akshay-Arpit | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
