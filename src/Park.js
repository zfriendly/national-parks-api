import React from "react";
import "./Park.css";
import { Link } from "react-router-dom";

const Park = props => {
  return (
    <div className="park__page">
      <div className="park__hero">
        <h1 className="park__name">Park Name</h1>
      </div>
      <div className="park__description">
        <p>Lorem sdjfnasdjklfhasdlkjfasdf</p>
      </div>
      <div className="park__details">
        <div className="park__address">
          <h3>Address</h3>
          <p>123 Fake Street</p>
        </div>
        <div className="park__directions">
          <h3>Directions</h3>
          <p>Three doors down</p>
        </div>
        <button>Read More</button>
        <div className="park__images">
          <h3>Images</h3>
          <div className="park__images-container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <Link to="/">
        <h3>Back to Park List</h3>
      </Link>
    </div>
  );
};

export default Park;
