import "./page.css!";
import React from 'react';

import Navbar from './navbar.jsx!';
import ArticleList from './article-list.jsx!';

export default React.createClass({
  render: function() {
    if (!this.props.children)
      this.props.children = (
          <ArticleList thumbs={this.props.thumbs} />
      );

    return (
      <div>
        <Navbar selected="latest" />
        <div className="page">
          {this.props.children}
        </div>
      </div>
    );
  }
});
