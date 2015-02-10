import "./navbar.css!";
import React from "react";

export default React.createClass({
  render: function() {
    //We get the menu links from the default context.
    var config = this.props.menu || {};

    var anchors = Object.keys(config).map((link) => {
      var href = config[link];
      if (link === this.props.selected)
        return (<a href={href} id="selected"> {link} </a>);
      return (<a href={href}> {link} </a>);
    });

    return (
      <div className="navbar-container">
        <a href="/post/index">
          <div className="logo">
            <img src={this.props.logo} />
            <div id="overlay" />
          </div>
        </a>

        <div className="navbar">
          {anchors}
        </div>
      </div>
    );
  }
});
