import "./page.css!";
import React from 'react';

import Navbar from './navbar.jsx!';
import ArticleList from './article-list.jsx!';

export default React.createClass({
  render: function() {
    if (!this.props.children)
      this.props.children = (
        <div>
          <Navbar selected="latest" />
          <ArticleList thumbs={this.props.thumbs} />
        </div>
      );

    return (
      <div className="page">
        {this.props.children}
      </div>
    );
  }
});
