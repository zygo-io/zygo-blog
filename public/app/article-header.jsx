import './article-header.css!';
import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="article-header-container">
        <div className="article-header">
          <h2> Lorem Ipsum </h2>
          <img src="/assets/sample-portrait.png" />
          <h3> Sit dolor amet, hic hac hoc blah </h3>
        </div>
      </div>
    );
  }
});
