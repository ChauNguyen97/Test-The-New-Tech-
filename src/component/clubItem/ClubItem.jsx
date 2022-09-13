import React from "react";
import "./clubItem.css";

const ClubItem = ({ item, type }) => {
  return (
    <div className={type === "list" ? "clubItem listMode" : "clubItem"}>
      <div className="ciInfo">
        <img
          src={process.env.PUBLIC_URL + "/logo.png"}
          alt=""
          className="ciLogo"
        />
        <div className="ciUser">
          <p className="ciGym">The New Gym</p>
          <h1 className="ciName">{item.name}</h1>
        </div>
        <div className="ciDetail">
          <h1 className="ciPrice">$399.000/m</h1>
          <p className="ciAddress">{item.districtName}</p>
        </div>
      </div>
      <img
        src={process.env.PUBLIC_URL + "/love.png"}
        alt=""
        className="ciIcon"
      />
    </div>
  );
};

export default ClubItem;
