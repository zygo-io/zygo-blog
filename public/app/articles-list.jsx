import React from 'react';

import Grid from 'react-bootstrap/Grid';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import Label from 'react-bootstrap/Label';

var ArticleThumbnail = React.createClass({
  render: function() {
    return (
      <Grid>
        <Row>
          <Col md={10}>
            <Label> {this.props.title} </Label>
          </Col>
        </Row>

        <Row>
          <Col md={10}>
            {this.props.body}
          </Col>
        </Row>

        <Row>
          <Col md={8} />
          <Col md={2}>
            <Button href="/post/42"> Read More </Button>
          </Col>
        </Row>
      </Grid>
    );
  }
})

export default React.createClass({
  render: function() {
    var mock = Array.apply(null, Array(4)).map(() =>
      <ListGroupItem>
        <ArticleThumbnail title="A title" body="A body" />
      </ListGroupItem>
    )

    return (
      <ListGroup>
        {mock}
      </ListGroup>
    );
  }
})
