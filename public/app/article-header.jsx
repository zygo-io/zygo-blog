import './article-header.css!';
import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="article-header-container">
        <img src={this.props.back_img} />

        <div className="article-header">
          <h2> {this.props.title} </h2>
          <h3> {this.props.subtitle} </h3>
          <img src={this.props.author_img} />
          <h4> {this.props.author} </h4>
        </div>
      </div>
    );
  }
});
