import React from "react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "./Login";

const Logout = (data) => {
  const [authenticated, setauthenticated] = useState();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);
  if (!authenticated) {
    {
      <Login />;
    }
    return <Navigate replace to="/logout" />;
  } else {
    return (
      <div>
        <p>Logout....</p>
      </div>
    );
  }
};

export default Logout;
