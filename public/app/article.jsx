import React from 'react';

import Grid from 'react-bootstrap/Grid';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Pager from 'react-bootstrap/Pager';
import PageItem from 'react-bootstrap/PageItem';
import PageHeader from 'react-bootstrap/PageHeader';

export default React.createClass({
  render: function() {
    return (
      <Grid>
        <Row>
          <Col md={10}>
            <PageHeader> Page Header </PageHeader>
          </Col>
        </Row>

        <Row>
          <Col md={10}>
            Content
          </Col>
        </Row>

        <Row>
          <Col md={10}>
            <Pager>
              <PageItem href="/"> Back </PageItem>
              <PageItem> Next Post </PageItem>
            </Pager>
          </Col>
        </Row>
      </Grid>
    );
  }
});
