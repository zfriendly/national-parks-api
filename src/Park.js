import React from "react";
import "./Park.css";
import { Link } from "react-router-dom";

const Park = props => {
  let parkData = props.data.filter(datum => datum.id === props.match.params.id);
  let background = {
    backgroundImage: `url(${parkData[0].images[0].url})`
  };
  return (
    <div className="park__page">
      <div className="park__hero" style={background}>
        <h1 className="park__name">{parkData[0].fullName}</h1>
      </div>
      <div className="park__description">
        <p>{parkData[0].description}</p>
      </div>
      <div className="park__details">
        <div className="park__address">
          <h3>Address</h3>
          <p>{parkData[0].addresses[0].line1}</p>
          <p>
            {parkData[0].addresses[0].city},{" "}
            {parkData[0].addresses[0].stateCode}{" "}
            {parkData[0].addresses[0].postalCode}
          </p>
        </div>
        <div className="park__directions">
          <h3>Directions</h3>
          <p>{parkData[0].directionsInfo}</p>
        </div>
        <a href={parkData[0].directionsUrl} target="_blank">
          <div>Read More</div>
        </a>
        <div className="park__images">
          <h3>Images</h3>
          <div className="park__images-container">
            {parkData[0].images.map((pic, index) => {
              if (index < 5) {
                return (
                  <div
                    key={index}
                    className="park__images-thumbnail"
                    style={{ backgroundImage: `url(${pic.url})` }}
                  ></div>
                );
              }
            })}
          </div>
        </div>
        <Link to="/">
          <h3>Back to Park List</h3>
        </Link>
      </div>
    </div>
  );
};

export default Park;
