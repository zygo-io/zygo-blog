import React from 'react';
import 'lib/page.css!';

export default React.createClass({
  render: function() {
    return (
      <div className='pageContainer'>
        {this.props.children}
      </div>
    );
  }
});
