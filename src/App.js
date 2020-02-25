import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import Park from "./Park";
import Tile from "./Tile";
import ParksList from "./data/parks.json";

// let APIurl =
//   "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=FB8xUd8hgyVbthrLauwMwGCF3llE4GP7mWmJ7fL7";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  render() {
    return (
      <div className="app">
        <nav className="nav">
          <Link to="/">
            <h1>National Parks List</h1>
          </Link>
        </nav>
        <main className="main">
          <Route
            path="/"
            render={routerProps => <Home data={ParksList} />}
            exact
          />
        </main>
        <footer className="footer"></footer>
      </div>
    );
  }
}

export default App;
