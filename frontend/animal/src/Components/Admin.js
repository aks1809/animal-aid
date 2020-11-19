import React from "react";
import LoginAdmin from "./LoginAdmin";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Admin() {
  const [{ user }] = useStateValue();
  return (
    <div>
      {!user ? (
        <LoginAdmin />
      ) : (
        <div className="app__body">
          {user.name === "Arpit Kher" ? (
            <div>
              <Link to="/admin/form">SUCCESS_STORY_FORM</Link>
              <br />
              <Link to="/admin/adoptCarouselForm">ADOPT__ANIMALS__FORM</Link>
            </div>
          ) : (
            <h1>Sorry You Dont Have Access</h1>
          )}
        </div>
      )}
    </div>
  );
}

export default Admin;
