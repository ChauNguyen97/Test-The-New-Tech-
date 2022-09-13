import React, { useContext } from "react";
import useFetch from "../../hook/useFetch";
import ClubItem from "../clubItem/ClubItem";
import "./clubList.css";

const ClubList = () => {
  const { data, loading, error } = useFetch("/general/club");
  return (
    <div className="clubList">
      <div className="clContent">
        <h1 className="clTitle">List club</h1>
        <p className="clOption">Show All</p>
      </div>
      <div className="clItem">
        {loading ? (
          "loading"
        ) : (
          <>
            {data.map((item) => (
              <ClubItem item={item} key={item.id} />
            ))}
          </>
        )}
      </div>
      <div className="clContent">
        <h1 className="clTitle">List club</h1>
        <p className="clOption">Show All</p>
      </div>
      <div className="clItem colum">
        {loading ? (
          "loading"
        ) : (
          <>
            {data.map((item) => (
              <ClubItem type="list" item={item} key={item.id} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ClubList;
