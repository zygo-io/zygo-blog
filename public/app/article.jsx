import React from 'react';

import ArticleHeader from './article-header.jsx!';
import ArticleView from './article-view.jsx!';
import ReadNext from './read-next.jsx!';

export default React.createClass({
  render: function() {
    return (
      <div>
        <ArticleHeader />
        <ArticleView />
        <ReadNext />
      </div>
    );
  }
});
