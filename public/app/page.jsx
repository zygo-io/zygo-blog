import "./page.css!";
import React from 'react';

import Navbar from './navbar.jsx!';
import ArticleList from './article-list.jsx!';

export default React.createClass({
  render: function() {
    if (!this.props.children)
      this.props.children = <ArticleList />;

    return (
      <div className="page">
        <Navbar />
        <img className="banner" src="/assets/forest.jpg" />

        {this.props.children}
      </div>
    );
  }
});
