import './page.css!';
import React from 'react';

import Navbar from '../components/navbar.jsx!';

export default React.createClass({
  statics: {
    clientHandler: function(context) { context.db_host = '' },
    serverHandler: function(context, config) { context.db_host = 'http://localhost:8080' }
  },
  render: function() {
    return (
      <div>
        <Navbar selected={this.props.curRoute.path} logo={this.props.logo} menu={this.props.menu} />
        <div className="navbarFill" />
        <div className="page">
          {this.props.children}
        </div>
      </div>
    );
  }
});
