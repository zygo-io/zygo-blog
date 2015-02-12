import './article-list.css!';
import React from 'react';

import ArticleListing from '../components/article-listing.jsx!';

export default React.createClass({
  statics: {
    handler: '../handlers/article-list'
  },
  render: function() {
    var cid = this.props.curRoute.cid;

    var listings = cid ? this.props.thumbs.filter((thumb) => thumb.category == cid) : this.props.thumbs;

    return (
      <div className="article-list">
        {listings.map((thumb) => <ArticleListing key={thumb.id} thumb={thumb} />)}
      </div>
    );
  }
});
