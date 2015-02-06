import "./read-next.css!";
import React from 'react';
import PostThumbnail from './post-thumbnail.jsx!';

export default React.createClass({
  render: function() {
    return (
      <div className="read-next-container">
        <div className="read-next">
          <h5> READ NEXT </h5>
          <PostThumbnail pid={this.props.pid}
                                   cid={this.props.cid}
                                   title={this.props.title}
                                   thumb={this.props.thumb} />
        </div>
      </div>
    );
  }
});
