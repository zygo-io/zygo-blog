import React from 'react';

import ArticleHeader from './article-header.jsx!';
import ArticleView from './article-view.jsx!';
import ReadNext from './read-next.jsx!';

export default React.createClass({
  statics: {
    clientHandler: 'handlers/client-article',
    serverHandler: 'handlers/server-article'
  },

  render: function() {
    var post = this.props.posts[this.props.loadingRequest.options.id];
    var thumb = this.props.nextThumb;
    var readNext = thumb ? <ReadNext thumb={thumb.thumb} id={thumb.id} title={thumb.title}/> : null;

    return (
      <div>
        <ArticleHeader
          author_img={post.author_img}
          author={post.author}
          title={post.title}
          subtitle={post.subtitle}
          back_img={post.back_img}/>

        <ArticleView post={post.post} />
        {readNext}
      </div>
    );
  }
});
