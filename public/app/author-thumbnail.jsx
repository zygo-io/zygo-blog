import './author-thumbnail.css!';
import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="author-thumbnail">
        <img src={this.props.author_img} />
        <h4> {this.props.author} </h4>
        <h5> {this.props.date} </h5>
        <h5> {this.props.category} </h5>
      </div>
    );
  }
});
