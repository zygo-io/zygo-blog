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
      <Page activeKey={1}>
        <Grid>
          <Row>
            <Col md={12}>
              <h4> I am the Walrus </h4>
            </Col>
          </Row>
        </Grid>

      </Page>
    );
  }
});
