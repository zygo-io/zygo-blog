import "./page.css!";
import React from 'react';

import Navbar from './navbar.jsx!';
import ReadNext from './read-next.jsx!';
import Article from './article.jsx!';
import ArticleHeader from './article-header.jsx!';

import ArticleListing from './article-listing.jsx!';

export default React.createClass({
  render: function() {
    return (
      <div className="page">
        <Navbar />
        <img className="banner" src="assets/forest.jpg" />
        <ArticleHeader />

        <ArticleListing />
        <ArticleListing />
        <ArticleListing />

        <Article />
        <ReadNext />
      </div>
    );
  }
});
