import 'bootstrap/css/bootstrap.css!';
import React from 'react';

import Page from './page.jsx!';

export default React.createClass({
  render: function() {
    return (
      <Page activeKey={0}>
        <div> Post </div>
      </Page>
    );
  }
});
