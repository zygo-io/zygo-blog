import './article-list.css!';
import React from 'react';

import ArticleListing from './article-listing.jsx!';

export default React.createClass({
  render: function() {
    if (!this.props.children) {
      //If this is used as a route component, we filter thumbs
      // by their category, only showing those that match ours.
      if (this.props.loadingRequest) {
          this.props.thumbs = this.props.thumbs.filter(
            (thumb) => thumb.category === this.props.loadingRequest.options.cid
          );
      }

      var listings = this.props.thumbs.map(
        (thumb) => <ArticleListing thumb={thumb} cid={this.props.loadingRequest.options.cid} />
      );

      return (
        <div className="article-list">
          {listings}
        </div>
      );
    }

    //Otherwise there is a child, just render it.
    return this.props.children;
  }
});
