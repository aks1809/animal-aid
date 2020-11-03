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

const Footer = () => {
  return (
    <footer>
      <div className="jumbotron p-5 mb-0 rounded-0 bg-dark">
        <div className="row">
          <div className="col-lg-5 px-4 mb-5">
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
          <div className="col-lg-3 px-4 mb-5">
            <div className="heading text-white h3 font-weight-bold">
              Keep Connected
            </div>
            <hr className="bg-white" />
            <div className="description-1 mx-auto">
              <div className="row">
                <div className="row d-flex align-items-center px-3 py-1">
                  <div className="col ml-3">
                    <Avatar>
                      <FacebookIcon />
                    </Avatar>
                  </div>
                  <div className="text-muted">Like us on Facebook</div>
                </div>
              </div>
              <div className="row">
                <div className="row d-flex align-items-center px-3 py-1">
                  <div className="col ml-3">
                    <Avatar className="twitter">
                      <TwitterIcon />
                    </Avatar>
                  </div>
                  <div className="text-muted">Follow us on Twitter</div>
                </div>
              </div>
              <div className="row">
                <div className="row d-flex align-items-center px-3 py-1">
                  <div className="col ml-3">
                    <Avatar>
                      <InstagramIcon />
                    </Avatar>
                  </div>
                  <div className="text-muted">Follow us on Instagram</div>
                </div>
              </div>
              <div className="row">
                <div className="row d-flex align-items-center px-3 py-1">
                  <div className="col ml-3">
                    <Avatar>
                      <YouTubeIcon />
                    </Avatar>
                  </div>
                  <div className="text-muted">Suscribe on YouTube</div>
                </div>
              </div>
              <div className="row">
                <div className="row d-flex align-items-center px-3 py-1">
                  <div className="col ml-3">
                    <Avatar>
                      <PinterestIcon />
                    </Avatar>
                  </div>
                  <div className="text-muted">Follow us on Pinterest</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 px-4 mb-5">
            <div className="heading text-white h3 font-weight-bold">
              Contact Information
            </div>
            <hr className="bg-white" />
            <div className="description-1 mx-auto">
              <div className="row">
                <div className="row d-flex align-items-center px-3 py-1">
                  <div className="col ml-3">
                    <Avatar className="twitter">
                      <CallIcon />
                    </Avatar>
                  </div>
                  <div className="text-muted">+91-9988776655</div>
                </div>
                <div className="row d-flex align-items-center px-3 py-1">
                  <div className="col ml-3">
                    <Avatar className="twitter">
                      <HomeIcon />
                    </Avatar>
                  </div>
                  <div className="text-muted">Subhash Nagar, Bareilly</div>
                </div>
              </div>
            </div>
            <div className="heading text-white h3 font-weight-bold mt-3">
              Suscribe to newsletter
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
      <div className="jumbotron jumbotron-flex rounded-0 bg-info m-0 p-2 text-white px-5">
        &#169; Designed by Chutiye | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
