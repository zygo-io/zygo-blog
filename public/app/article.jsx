import React from 'react';

import ArticleHeader from './article-header.jsx!';
import ArticleView from './article-view.jsx!';
import ReadNext from './read-next.jsx!';

export default React.createClass({
  render: function() {
    var post = this.props.posts[this.props.currentRequest.options.id][0];

    return (
      <div>
        <ArticleHeader
          author_img={post.author_img}
          title={post.title}
          subtitle={post.subtitle}/>

        <ArticleView post={post.post} />
        <ReadNext />
      </div>
    );
  }
});
