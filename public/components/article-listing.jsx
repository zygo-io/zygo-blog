import './article-listing.css!';
import React from 'react';

import AuthorThumbnail from './author-thumbnail.jsx!';
import PostThumbnail from './post-thumbnail.jsx!';

export default React.createClass({
  render: function() {
    var thumb = this.props.thumb;

    return (
      <div className="article-listing">
        <div id="post-wrapper">
          <PostThumbnail {..thumb} />
        </div>

        <div id="author-wrapper">
          <AuthorThumbnail {..thumb} />
        </div>
      </div>
    );
  }
})
