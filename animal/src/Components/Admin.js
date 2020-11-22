import React, { useState, useEffect } from "react";
import LoginAdmin from "./LoginAdmin";
import axios from "axios";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Admin() {
  const [{ user }] = useStateValue();
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    axios
      .get("/api/admins/sync")
      .then((response) => {
        setAdmins(response.data);
      })
      .catch(() => console.log("Promise rejected"));
  }, []);
  return (
    <div>
      {!user ? (
        <LoginAdmin />
      ) : (
        <div>
          {admins.map((admin) => (
            <div className="app__body">
              {user.googleId === admin.adminId ? (
                <div>
                  <Link to="/admin/form">SUCCESS_STORY_FORM</Link>
                  <br />
                  <Link to="/admin/adoptCarouselForm">
                    ADOPT__ANIMALS__FORM
                  </Link>
                </div>
              ) : (
                <>
                  <h1>Sorry You Dont Have Access</h1>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Admin;
