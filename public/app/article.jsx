import React from 'react';

import ArticleHeader from './article-header.jsx!';
import ArticleView from './article-view.jsx!';
import ReadNext from './read-next.jsx!';

export default React.createClass({
  render: function() {
    var post = this.props.posts[this.props.loadingRequest.options.id][0];

    return (
      <div>
        <ArticleHeader
          author_img={post.author_img}
          author={post.author}
          title={post.title}
          subtitle={post.subtitle}
          back_img={post.back_img}/>

        <ArticleView post={post.post} />
        <ReadNext thumb={post.thumb} id={post.id} title={post.title}/>
      </div>
    );
  }
});
