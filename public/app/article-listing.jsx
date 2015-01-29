import './article-listing.css!';
import React from 'react';

import AuthorThumbnail from './author-thumbnail.jsx!';
import PostThumbnail from './post-thumbnail.jsx!';

export default React.createClass({
  render: function() {
    return (
      <div className="article-listing">
        <div id="author-wrapper">
          <AuthorThumbnail />
        </div>

        <div id="post-wrapper">
          <PostThumbnail />
        </div>
      </div>
    );
  }
})
