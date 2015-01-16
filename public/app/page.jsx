import 'bootstrap/css/bootstrap.css!';
import React from 'react';

import Well from 'react-bootstrap/Well';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';

export default React.createClass({
  render: function() {
    return (
      <div>
        <Navbar>
          <h1> Zygo Test App </h1>

          <Nav bsStyle="pills" activeKey={this.props.activeKey}>
            <NavItem eventKey={1} href='/'> Home </NavItem>
            <NavItem eventKey={2} href='/about'> About </NavItem>
          </Nav>
        </Navbar>

        {this.props.children}
      </div>
    );
  }
});
