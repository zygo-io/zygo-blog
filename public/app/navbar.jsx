import "./navbar.css!";
import React from "react";

export default React.createClass({
  render: function() {
    var links = ['latest', 'ember', 'react'];
    var anchors = links.map((link) => {
      var href = '/category/' + link;
      if (link === this.props.selected)
        return (<a href={href} id="selected"> {link} </a>);
      return (<a href={href}> {link} </a>);
    });

    return (
      <div className="navbar-container">
        <div className="navbar">
          <div className="logo">
            <img src="/assets/logo-black.svg" />
            <div id="overlay" />
          </div>

          {anchors}
        </div>
      </div>
    );
  }
});
