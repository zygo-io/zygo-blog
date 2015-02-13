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
     *  - readNext
     */
    handler: function(context) {
      var id = context.loadRoute.pid;
      context.posts = context.posts || {};

      return Promise.all([
        request(context.db_host + '/db/post/' + id),
        request(context.db_host + '/db/next/thumb/' + id)
      ])
      .then(function(responses) {
        context.posts[id] = responses[0];
        context.nextArticle = responses[1];

        // set the page title
        context.meta.title = context.posts[id].title;
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
        <ReadNext {...this.props.nextArticle} />
      </div>
    );
  },

  //Guaranteed to only be called on the client, so we can use global Systemjs object.
  componentDidMount: function() {
    System.import(this.props.posts[this.props.curRoute.pid].back_img.substr(1) + '!image')
      .then(() => {
        var overlay;
        while(overlay = document.getElementById("loading"))
        overlay.id = "";
      });
  }
});
