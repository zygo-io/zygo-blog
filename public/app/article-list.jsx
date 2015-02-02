import './article-list.css!';
import React from 'react';

import ArticleListing from './article-listing.jsx!';

export default React.createClass({
  render: function() {
    var listings = this.props.thumbs.map(
      (thumb) => <ArticleListing thumb={thumb} />
    );

    return (
      <div className="article-list">
        {listings}
      </div>
    );
  }
});
