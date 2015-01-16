import 'bootstrap/css/bootstrap.css!';
import React from 'react';
import Page from './page.jsx!';

import Well from 'react-bootstrap/Well';
import Grid from 'react-bootstrap/Grid';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default React.createClass({
  render: function() {
    return (
      <Page activeKey={2}>
        <Grid>
          <Row>
            <Col md={12}>
              <h4> Who are we? </h4>
              We are the Eggmen.
            </Col>
          </Row>
        </Grid>
      </Page>
    );
  }
});
