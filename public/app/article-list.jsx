import './article-list.css!';
import React from 'react';

import ArticleListing from './article-listing.jsx!';

export default React.createClass({
  render: function() {
    return (
      <div className="article-list">
        <ArticleListing />
        <ArticleListing />
        <ArticleListing />
        <ArticleListing />
        <ArticleListing />
        <ArticleListing />
      </div>
    );
  }
});
