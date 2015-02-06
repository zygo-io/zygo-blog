import React from 'react';
import request from '../handlers/client-http';

import ArticleHeader from './article-header.jsx!';
import ArticleView from './article-view.jsx!';
import ReadNext from './read-next.jsx!';

export default React.createClass({
  statics: {
    clientHandler: '../handlers/client-article',
    serverHandler: '../handlers/server-article'
  },

  render: function() {
    return (
      <div>
        {this.getHeader()}
        {this.getBody()}
        {this.getReadNext()}
      </div>
    );
  },

  //Get article header.
  getHeader: function() {
    var post = this.props.posts[this.props.loadingRequest.options.pid];

    if (!post.title && !post.subtitle) return null;
    return <ArticleHeader author_img={post.author_img}
                                     author={post.author}
                                     title={post.title}
                                     subtitle={post.subtitle}
                                     back_img={post.back_img} />;
  },

  //Get article body.
  getBody: function() {
    var post = this.props.posts[this.props.loadingRequest.options.pid];

    if (!post.post) return null;
    return <ArticleView post={post.post} />;
  },

  //Get read next bar.
  getReadNext: function() {
    var thumb = this.props.nextThumb;

    if (!thumb) return null;
    return <ReadNext thumb={thumb.thumb}
                                title={thumb.title}
                                pid={thumb.id}
                                cid={this.props.loadingRequest.options.cid} />;
  },

  //Guaranteed to only be called on the client, so we can use client-http fine.
  componentDidMount: function() {
    request(this.props.posts[this.props.loadingRequest.options.pid].back_img)
      .then(() => {
        var overlay;
        while(overlay = document.getElementById("loading"))
        overlay.id = "";
      });
  }
});
