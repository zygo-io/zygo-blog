import './article.css!';
import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="article-container">
        <div className="article" dangerouslySetInnerHTML={{__html: this.props.post}} />
      </div>
    );
  }
});
