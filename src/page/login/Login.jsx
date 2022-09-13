import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.data });
      navigate("/home");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  return (
    <div className="login">
      <h1 className="lTitle">Welcome Back!</h1>
      <span className="lSubtitle">
        Fill your details or continue with social media
      </span>
      <div className="lForm">
        <img
          src={process.env.PUBLIC_URL + "/Message.svg"}
          alt=""
          className="lIconRight"
        />
        <input
          type="text"
          className="lInput"
          placeholder="Email Address"
          id="username"
          onChange={handleChange}
        />
      </div>
      <div className="lForm">
        <img
          src={process.env.PUBLIC_URL + "/Lock-icon.svg"}
          alt=""
          className="lIconRight"
        />
        <input
          type="password"
          className="lInput"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        <img
          src={process.env.PUBLIC_URL + "/Eye-slash.svg"}
          alt=""
          className="lIconLeft"
        />
      </div>
      <button className="lButton" onClick={handleClick}>
        LOG IN
      </button>
      <div className="lText">
        <hr />
        <span>Or Continue with</span>
        <hr />
      </div>
      <div className="lSocial">
        <button className="lsButton google">
          <img
            src={process.env.PUBLIC_URL + "/google-icon.svg"}
            alt=""
            className="lsIcon"
          />
        </button>
        <button className="lsButton facebook">
          <img
            src={process.env.PUBLIC_URL + "/fb-icon.svg"}
            alt=""
            className="lsIcon"
          />
        </button>
      </div>
      <div className="lRegister">
        <span>
          New User?{" "}
          <Link
            to="/register"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <b>Create Account</b>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
