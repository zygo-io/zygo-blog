import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Panel from 'react-bootstrap/Panel';
import Button from 'react-bootstrap/Button';

export default React.createClass({
  render: function() {
    var mock = Array.apply(null, Array(10)).map(() =>
      <Button>
        {['abelian', 'monoidal', 'algebraic', 'topological'][parseInt(Math.random()*3)]}
      </Button>
    );

    return (
      <Panel header="Categories">
        {mock}
      </Panel>
    );
  }
})
