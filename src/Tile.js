import React, { Component } from "react";
import "./Tile.css";
import "./Home.css";
import { Link } from "react-router-dom";

const Tile = props => {
  let background = {
    backgroundColor: `rgba(0,0,0)`
  };
  return (
    <div className="tile" style={background}>
      <img src={props.data.images[0].url}></img>
      <h2 className="park-name-tile">{props.data.name}</h2>
    </div>
  );
};

export default Tile;
