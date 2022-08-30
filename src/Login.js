import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const sign = require("jwt-encode");
  const secret = "secret";

  const data = {
    sub: "2cb09e28-9bf3-42a1-9b53-c5f3296b202d",
    auth_time: 1661253183,
    exp: 1661256783,
    iat: 1661253186,
    username: "Google_102719138375295957322",
  };
  const jwt = sign(data, secret);

  const submit = () => {
    console.log(jwt);
    setauthenticated(true);
    localStorage.setItem("authenticated", jwt);
    navigate("/logout");
  };

  return (
    <>
      <button onClick={() => submit()}>LOGIN</button>
    </>
  );
};
export default Login;
