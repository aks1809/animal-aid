import React from "react";
import "../Style/LoginAdmin.css";
import GoogleLogin from "react-google-login";
import { actionTypes } from "./Reducer";
import { useStateValue } from "./StateProvider";
import image3 from "../images/whatWeDo4.jpg";

function LoginAdmin() {
  const [dispatch] = useStateValue();

  const responseGoogle = (response) => {
    dispatch({
      type: actionTypes.SET_USER,
      user: response.profileObj,
    });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img alt="" src={image3} />
        <div className="login_text">
          <h1>Sign In To Animal-Aid Admin</h1>
        </div>
        <GoogleLogin
          className="google__login"
          clientId="193889789553-pt2m1crgkr0852rlerpriqdmro7v5l25.apps.googleusercontent.com"
          buttonText="Login With Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
}

export default LoginAdmin;
