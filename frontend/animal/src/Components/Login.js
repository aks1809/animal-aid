import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { Link } from "react-router-dom";
import { actionTypes } from "./Reducer";
import { useStateValue } from "./StateProvider";
import "./Header";

function Login() {
  const [input, setInput] = useState("");
  const [{}, dispatch] = useStateValue();

  const responseGoogle = (response) => {
    dispatch({
      type: actionTypes.SET_USER,
      user: response.profileObj,
    });
    setInput(response.profileObj.name);
  };

  const logout = () => {
    setInput("");
  };

  return (
    <div>
      {input === "" ? (
        <GoogleLogin
          className="google__login"
          clientId="430654190508-dc289he7ndjtmhqh9upceic2l30o837s.apps.googleusercontent.com"
          buttonText="Login With Google"
          theme="dark"
          icon={true}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      ) : (
        <div>
          <GoogleLogout
            className="google__logout"
            clientId="430654190508-dc289he7ndjtmhqh9upceic2l30o837s.apps.googleusercontent.com"
            buttonText="Log Out"
            theme="dark"
            icon={true}
            onLogoutSuccess={logout}
          ></GoogleLogout>
          <Link className="LinkButton btn btn-primary" to="/donate">
            Donate
          </Link>
        </div>
      )}
    </div>
  );
}

export default Login;