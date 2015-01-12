import React from 'react';
import Page from './page.jsx!';
import 'lib/two.css!';

import * as zygo from 'zygo/lib/zygo-client';

export default React.createClass({
  render: function() {
    return (
      <Page>
        <div className="two disable-select" onClick={this.clickHandler}>
          Two.
        </div>
      </Page>
    );
  },

  clickHandler: function() {
    zygo.route('/one');
  }
});
