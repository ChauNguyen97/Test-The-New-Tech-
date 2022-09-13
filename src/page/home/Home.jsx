import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ClubList from "../../component/clubList/ClubList";
import Header from "../../component/header/Header";
import Search from "../../component/search/Search";
import { AuthContext } from "../../context/AuthContext";
import "./home.css";

const Home = () => {
  const { user, dispatch } = useContext(AuthContext);

  const navigation = useNavigate();

  const handleSignOut = () => {
    dispatch({ type: "LOGOUT", payload: { user } });
    navigation("/");
  };
  return (
    <div className="home">
      <Header />
      <Search />
      <ClubList />
      <button className="homeButton" onClick={handleSignOut}>
        SIGN OUT
      </button>
    </div>
  );
};

export default Home;
