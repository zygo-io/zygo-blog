import './author-thumbnail.css!';
import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="author-thumbnail">
        {this.getImgDiv()}

        <div className="info">
          <h4> {this.props.author} </h4>
          <h5> {this.props.date} </h5>
        </div>
      </div>
    );
  },

  getImgDiv: function() {
    if (this.props.author_img)
      return <img src={this.props.author_img} />;
    return <div className="img-placeholder" />;
  }
});
