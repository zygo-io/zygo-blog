import './article-list.css!';
import React from 'react';
import {request} from '../data-request';

import ArticleListing from '../components/article-listing.jsx!';

export default React.createClass({
  statics: {
    /*
     * Article List handler
     *
     * Gets teaser-style list of all articles
     * Stored at context.thumbs
     *
     */
    handler: function(context) {
      return request(context.db_host + '/db/thumbs')
      .then(function(listing) {
        context.thumbs = listing;
      });
    }
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
