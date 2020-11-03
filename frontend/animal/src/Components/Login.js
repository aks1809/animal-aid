import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { Link } from "react-router-dom";
import "./Header";

//ClientId:193889789553-pt2m1crgkr0852rlerpriqdmro7v5l25.apps.googleusercontent.com
//193889789553-pt2m1crgkr0852rlerpriqdmro7v5l25.apps.googleusercontent.com
function Login() {
  const [input, setInput] = useState("");
  const responseGoogle = (response) => {
    setInput(response.profileObj.name);
    alert("You are successfully logged in");
  };

  const logout = (response) => {
    setInput("");
    alert("You are successfully logged out");
  };

  return (
    <div>
      {input === "" ? (
        <GoogleLogin
          className="google__login"
          clientId="193889789553-pt2m1crgkr0852rlerpriqdmro7v5l25.apps.googleusercontent.com"
          buttonText="Login With Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      ) : (
        <div>
          <GoogleLogout
            className="google__login"
            clientId="193889789553-pt2m1crgkr0852rlerpriqdmro7v5l25.apps.googleusercontent.com"
            buttonText="Log Out"
            onLogoutSuccess={logout}
          ></GoogleLogout>
          <Link className="LinkButton" to="/donate">
            {" "}
            Donate{" "}
          </Link>
        </div>
      )}
    </div>
  );
}

export default Login;
