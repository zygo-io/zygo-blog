import "./page.css!";
import React from 'react';

import ReadNext from './read-next.jsx!';
import Article from './article.jsx!';
import ArticleHeader from './article-header.jsx!';

export default React.createClass({
  render: function() {
    return (
      <div className="page">
        <img className="banner" src="assets/forest.jpg" />
        <ArticleHeader />
        <Article />
        <ReadNext />
      </div>
    );
  }
});
