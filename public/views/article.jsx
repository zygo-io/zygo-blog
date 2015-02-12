import React from 'react';

import 'prism/themes/prism-dark.css!';

import ArticleHeader from '../components/article-header.jsx!';
import Article from '../components/article.jsx!';
import ReadNext from '../components/read-next.jsx!';

export default React.createClass({
  statics: {
    handler: '../handlers/article'
  },

  render: function() {
    var pid = this.props.curRoute.pid;
    var post = this.props.posts[pid];

    return (
      <div>
        {(post.title || post.subtitle) && <ArticleHeader {..post} />}
        <Article post={post.post} />
        <ReadNext {..this.props.nextArticle} />
      </div>
    );
  },

  //Guaranteed to only be called on the client, so we can use client-http fine.
  // TODO use image plugin here
  componentDidMount: function() {
    /* 
    request(this.props.posts[this.props.loadRoute.pid].back_img)
      .then(() => {
        var overlay;
        while(overlay = document.getElementById("loading"))
        overlay.id = "";
      });
    */
  }
});
