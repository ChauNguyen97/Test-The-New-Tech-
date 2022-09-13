import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hook/useFetch";
import "./header.css";

const Header = () => {
  const { user } = useContext(AuthContext);
  const token = Object.values(user)[1];
  const { data } = useFetch("/auth/profile", token);
  console.log(data);
  return (
    <div className="header">
      <button className="headerOption">
        <img src={process.env.PUBLIC_URL + "/menu.svg"} alt="" />
      </button>
      <div className="headerUser">
        <div className="huInfo">
          <h3 className="huName">
            {data.firstName} {data.lastName}
          </h3>
          <span className="huPhone">{data.phoneNumber}</span>
        </div>
        <img src={data.avatar} alt="" className="huPicture" />
      </div>
    </div>
  );
};

export default Header;
