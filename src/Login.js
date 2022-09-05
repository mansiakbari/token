import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Login = () => {
  // debugger;
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem("authenticated") || false
  );
  const sign = require("jwt-encode");
  const secret = "secret";

  const data = {
    sub: "2cb09e28-9bf3-42a1-9b53-c5f3296b202d",
    auth_time: 1661253183,
    exp: 5000,
    iat: 1661253186,
    username: "Google_102719138375295957322",
  };
  const jwt = sign(data, secret);

  const submit = () => {
    document.write(jwt);
    setauthenticated(true);
    localStorage.setItem("authenticated", jwt);

    const cookies = new Cookies();
    cookies.set("authenticated", jwt, { path: "/" }, { expires: data.exp });

    setTimeout(function () {
      navigate("/logout");
      window.location.reload();
    }, data.exp);
  };

  return (
    <>
      <button onClick={() => submit()}>LOGIN</button>
    </>
  );
};
export default Login;
