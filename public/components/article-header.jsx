import './article-header.css!';
import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="article-header-container" style={{backgroundImage: 'url('+this.props.back_img+')'}} >
        <div className="overlay" id="loading" />

        <div className="article-header" id="loading">
          <h2> {this.props.title} </h2>
          <h3> {this.props.subtitle} </h3>
          {this.getAuthorDiv()}
        </div>
      </div>
    );
  },

  getAuthorDiv: function() {
    if (this.props.author_img && this.props.author) {
      return (
        <div>
          <img src={this.props.author_img} />
          <h4> {this.props.author} </h4>
        </div>
      );
    }

    return null;
  }
});
