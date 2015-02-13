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
      // only load listing data if we dont have it
      if (context.thumbs)
        return;

      return request(context.db_host + '/db/thumbs')
      .then(function(listing) {
        if (!context.loadRoute)
          return;

        context.thumbs = listing;

        // if the category isn't used at all, then cancel this route
        var cid = context.loadRoute.cid;

        if (!cid || !listing.some((item) => item.category == cid))
          return false;

        context.pageTitle = cid.charAt(0).toUpperCase() + cid.substr(1);
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
