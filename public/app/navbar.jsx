import "./navbar.css!";
import React from "react";

export default React.createClass({
  render: function() {
    return (
      <div className="navbar-container">
        <div className="navbar">
          <div className="fade">
            <img src="assets/logo-red.svg" />
            <img src="assets/logo-black.svg" />
          </div>

          <a href='/'> Latest </a>
          <a href='/'> Ember </a>
          <a href='/'> React </a>
        </div>
      </div>
    );
  }
});
