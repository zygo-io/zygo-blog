import React from 'react';
import Page from './page.jsx!';
import 'lib/one.css!';

import * as zygo from 'zygo';

export default React.createClass({
  render: function() {
    return (
      <Page>
        <div className="one disable-select" onClick={this.clickHandler}>
          One.
        </div>
      </Page>
    );
  },

  clickHandler: function() {
    zygo.route('/two');
  }
});
