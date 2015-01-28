import 'bootstrap/css/bootstrap.css!';

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import Nav from 'react-bootstrap/Nav';
import Grid from 'react-bootstrap/Grid';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Categories from './categories.jsx!';
import ArticlesList from './articles-list.jsx!';

export default React.createClass({
  render: function() {
    //By default, we show an articles list.
    var contents = this.props.children;
    if (!contents) contents = (
      <ArticlesList />
    );

    return (
      <div>
        <Navbar>
          <Nav>
            <NavItem href="/"> Blogging Platform </NavItem>
          </Nav>
        </Navbar>

        <Grid>
          <Row>
            <Col xs={2} md={2}>
              <Categories />
            </Col>

            <Col xs={10} md={10}>
              {contents}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});
