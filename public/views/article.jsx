import React from 'react';

import {request} from '../data-request';

import 'prism/themes/prism-dark.css!';

import ArticleHeader from '../components/article-header.jsx!';
import Article from '../components/article.jsx!';
import ReadNext from '../components/read-next.jsx!';

export default React.createClass({
  statics: {
    /*
     * Article handler
     * From curRoute.pid route context, populates context data:
     *  - posts[pid]
     */
    handler: function(context) {
      var id = context.loadRoute.pid;
      context.posts = context.posts || {};

      return (context.posts[id] ? Promise.resolve(context.posts[id]) : request(context.db_host + '/db/post/' + id))
      .then(function(post) {
        context.posts[id] = post;

        // set the page title
        context.pageTitle = post.title;
      });
    }
  },

  render: function() {
    var pid = this.props.curRoute.pid;
    var post = this.props.posts[pid];

    return (
      <div>
        {(post.title || post.subtitle) && <ArticleHeader {...post} />}
        <Article post={post.post} />
        { post.nextThumb ? <ReadNext {...post.nextThumb} /> : null }
      </div>
    );
  },

  //Guaranteed to only be called on the client, so we can use global Systemjs object.
  componentDidMount: function() {
    var headerImg = this.props.posts[this.props.curRoute.pid].back_img;
    if (headerImg)
      System.import(headerImg.substr(1) + '!image')
      .then(() => {
        var overlay;
        while(overlay = document.getElementById("loading"))
        overlay.id = "";
      });
  }
});
