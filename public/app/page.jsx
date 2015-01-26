import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div id="page">
        <h1> Page Component </h1>
        {this.props.children}
      </div>
    );
  }
});
