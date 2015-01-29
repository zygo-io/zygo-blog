import './author-thumbnail.css!';
import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="author-thumbnail">
        <img src="/assets/sample-portrait.png" />
        <h4> Lauren Bayley </h4>
        <h5> {new Date().toString()} </h5>
        <h5> Reactionary </h5>
      </div>
    );
  }
});
