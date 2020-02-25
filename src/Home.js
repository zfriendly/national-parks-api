import React, { Component, isValidElement } from "react";
import Park from "./Park";
import Tile from "./Tile";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = props => {
  let thumbnails = props.data.map(item => {
    return (
      <div key={item.id}>
        <Link to={"/park/" + item.id}>
          {" "}
          <Tile data={item} />
        </Link>
      </div>
    );
  });
  return <div className="home">{thumbnails}</div>;
};

export default Home;
