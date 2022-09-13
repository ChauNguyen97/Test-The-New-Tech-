import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    phone: undefined,
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
      const res = await axios.post(
        "/auth/register-member-account/",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.data });
      navigate("/home");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  return (
    <div className="register">
      <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
        <img
          src={process.env.PUBLIC_URL + "/Chevron-left.svg"}
          alt=""
          className="rBack"
        />
      </Link>

      <h1 className="rTitle">Register Account</h1>
      <span className="rSubtitle">
        Fill your details or continue with social media
      </span>
      <div className="rForm">
        <img
          src={process.env.PUBLIC_URL + "/Union.svg"}
          alt=""
          className="rIconRight"
        />
        <input
          type="text"
          className="rInput"
          placeholder="User Name"
          id="username"
          onChange={handleChange}
        />
      </div>
      <div className="rForm">
        <img
          src={process.env.PUBLIC_URL + "/Message.svg"}
          alt=""
          className="rIconRight"
        />
        <input
          type="text"
          className="rInput"
          placeholder="Email Address"
          id="email"
          onChange={handleChange}
        />
      </div>
      <div className="rForm">
        <img
          src={process.env.PUBLIC_URL + "/Message.svg"}
          alt=""
          className="rIconRight"
        />
        <input
          type="text"
          className="rInput"
          placeholder="Phone Number"
          id="phoneNumber"
          onChange={handleChange}
        />
      </div>

      <div className="rForm">
        <img
          src={process.env.PUBLIC_URL + "/Lock-icon.svg"}
          alt=""
          className="rIconRight"
        />
        <input
          type="password"
          className="rInput"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        <img
          src={process.env.PUBLIC_URL + "/Eye-slash.svg"}
          alt=""
          className="rIconLeft"
        />
      </div>
      <button className="rButton" onClick={handleClick}>
        SIGN UP
      </button>
      <div className="rText">
        <hr />
        <span>Or Continue with</span>
        <hr />
      </div>
      <div className="rSocial">
        <button className="rsButton google">
          <img
            src={process.env.PUBLIC_URL + "/google-icon.svg"}
            alt=""
            className="rsIcon"
          />
        </button>
        <button className="rsButton facebook">
          <img
            src={process.env.PUBLIC_URL + "/fb-icon.svg"}
            alt=""
            className="rsIcon"
          />
        </button>
      </div>
      <div className="rLogin">
        <span>
          Already Have Account?
          <Link
            to="/login"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <b> Log In</b>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
