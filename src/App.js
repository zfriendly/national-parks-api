import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import Park from "./Park";
import Tile from "./Tile";
import ParksList from "./data/parks.json";
import Logo from "./NPSlogo.svg";

let APIurl =
  "https://developer.nps.gov/api/v1/parks?&api_key=FB8xUd8hgyVbthrLauwMwGCF3llE4GP7mWmJ7fL7";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: []
    };
  }
  componentDidMount() {
    fetch(APIurl)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ info: data });
      });
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
            render={routerProps => <Home data={this.state.info.data} />}
            exact
          />
          <Route
            path="/park/:id"
            render={routerProps => (
              <Park data={this.state.info.data} {...routerProps} />
            )}
          />
        </main>
        <footer className="footer">
          <div className="footer-text">
            <h3 className="nps">National Park Service</h3>
            <h2 className="interior">U.S. Department of the Interior</h2>
          </div>
          <img src={Logo}></img>
        </footer>
      </div>
    );
  }
}

export default App;
