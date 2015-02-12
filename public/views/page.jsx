import './page.css!';
import React from 'react';

import Navbar from '../components/navbar.jsx!';

export default React.createClass({
  render: function() {
    return (
      <div>
        <Navbar selected={this.props.loadRoute.path} logo={this.props.logo} menu={this.props.menu} />
        <div className="navbarFill" />
        <div className="page">
          {this.props.children}
        </div>
      </div>
    );
  }
});
