import React from "react";
import { Link } from "react-router-dom";
import ProfileButton from "../../components/profileButton/ProfileButton";
import Reel from "../../components/reel/Reel";
import "./LeisureScreen.scss";

const LeisureScreen = () => {
  return (
    <div className="leisure-container">
      <p className="leisure-container-title">Leisure</p>
      <p className="leisure-container-text">
        During my free time I like to practice trail running, road cycling and
        mountain biking. In 2020 I joined the club "parceros running", with them
        I compete throughout the year in different trail running competitions.
        Here I share some of my favorite images.
      </p>
      <Reel/>
      <Link to="/profile">
        <ProfileButton />
      </Link>
    </div>
  );
};

export default LeisureScreen;
