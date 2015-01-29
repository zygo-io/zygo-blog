import "./read-next.css!";
import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="read-next-container">
        <div className="read-next">
          <a href='/'>
            <h5> READ NEXT </h5>
            <h3> Non-global solutions in minkowskis space </h3>
            <p>
              In other news, somewhere along the line it was discovered that working in Minkowski space, spacetime metrics that only globally converge to the Einstein field equations exist. The singular points of said metrics are commonly known as black holes, and recently...
              <span className="read-next-button"> Continue </span>
            </p>
          </a>
        </div>
      </div>
    );
  }
});
