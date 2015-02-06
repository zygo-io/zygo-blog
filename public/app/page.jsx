import "./page.css!";
import "../assets/code-highlight.css!";
import React from 'react';

import Navbar from './navbar.jsx!';
import ArticleList from './article-list.jsx!';

export default React.createClass({
  statics: {
    clientHandler: '../handlers/client-page',
    serverHandler: '../handlers/server-page'
  },

  render: function() {
    return (
      <div>
        <Navbar selected={this.props.loadingRequest.options.cid}
                      logo={this.props.logo}
                      menu={this.props.menu} />
        <div className="navbarFill" />
        <div className="page">
          {this.props.children || <ArticleList thumbs={this.props.thumbs} />}
        </div>
      </div>
    );
  }
});
