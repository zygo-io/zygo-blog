import './article-header.css!';
import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="article-header-container">
        <div className="article-header">
          <h2> {this.props.title} </h2>
          <img src={this.props.author_img} />
          <h3> {this.props.subtitle} </h3>
        </div>
      </div>
    );
  }
});
