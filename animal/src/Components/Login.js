import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { Link } from "react-router-dom";
import { actionTypes } from "./Reducer";
import { useStateValue } from "./StateProvider";
import { toast } from "react-toastify";
import "./Header";

function Login() {
  const [input, setInput] = useState("");
  const [_, dispatch] = useStateValue();

  const responseGoogle = (response) => {
    try {
      dispatch({
        type: actionTypes.SET_USER,
        user: response.profileObj,
      });
      setInput(response.profileObj.name);
      toast.success("Sign in successfull");
    } catch (error) {}
  };

  const logout = () => {
    setInput("");
    toast.error("Signed out");
    console.log(_);
  };

  return (
    <div>
      {input === "" ? (
        <GoogleLogin
          className="google__login"
          clientId="461932582755-1b8ma5010ghbjttsm41vh2sbf53905un.apps.googleusercontent.com"
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
            clientId="461932582755-1b8ma5010ghbjttsm41vh2sbf53905un.apps.googleusercontent.com"
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
