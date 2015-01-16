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

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim finibus leo vel tincidunt. Duis at blandit magna. Proin vulputate iaculis elit et consectetur. Donec at porttitor libero. Quisque mollis vulputate cursus. Aliquam vitae sodales diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse arcu nisl, rhoncus ac congue aliquet, mattis at eros. Cras vitae interdum nisl, non dapibus sapien. Nam laoreet vestibulum lorem nec vestibulum. Nullam ac fringilla erat, eget volutpat ex. Sed blandit euismod risus, quis ullamcorper turpis aliquam ut.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={2}/>
            <Col md={8}>
              <Well>
                <p>
                  Fusce ut erat libero. Nam eu massa et risus condimentum fermentum. Maecenas quis tellus viverra, imperdiet ante quis, euismod lectus. Morbi ac sodales justo. Sed in rutrum odio, sit amet fringilla tellus. Cras ornare dignissim tortor, non vehicula massa tristique a. Nulla vulputate libero dui, id iaculis erat posuere at. Quisque id tellus at nisi pellentesque pharetra sit amet vel ipsum. Integer blandit arcu id quam feugiat venenatis.
                </p>
              </Well>
            </Col>
            <Col md={2}/>
          </Row>
          <Row>
            <Col md={12}>
              <p>
                Nunc at sem tellus. Cras vel consequat diam. Fusce interdum ac ligula ut suscipit. Sed a nisi feugiat, porttitor diam ac, semper odio. Donec orci nisl, accumsan nec velit ac, molestie ultricies leo. Praesent vitae diam sed lacus efficitur sagittis. Vivamus metus risus, feugiat id tortor vel, placerat porttitor ante. Aenean dapibus est ac nisi fermentum eleifend. Nam augue lorem, efficitur et magna ut, elementum interdum eros. Maecenas in bibendum diam, in lacinia velit. Suspendisse auctor purus finibus dolor lobortis tempus accumsan a enim. Mauris gravida rutrum posuere. Aenean ac tempus enim. Suspendisse in nisl est. Ut accumsan nulla quis lorem varius, at condimentum nisl ornare.
              </p>

              <p>
                Pellentesque accumsan suscipit libero non cursus. Nulla facilisi. Fusce pulvinar libero a pharetra porttitor. Phasellus vitae posuere nulla. In eu felis augue. Pellentesque non ligula faucibus, commodo mi ac, ultricies nibh. Phasellus eget odio eros. Sed sed elit id purus facilisis auctor. Maecenas vehicula nunc vitae eleifend malesuada. Vivamus eget dapibus urna. Sed id blandit metus. Donec a efficitur lorem, eu dignissim nibh. Mauris id ultricies purus. Cras mauris mi, rutrum sed mollis vel, dapibus vitae ipsum. Morbi et rhoncus lectus, pretium semper ligula.
              </p>

              <p>
                Donec lobortis ante a tincidunt facilisis. Duis nec pharetra est. Sed non nisi vehicula, laoreet eros semper, cursus erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum molestie gravida magna, et consectetur mauris gravida non. Nullam fringilla hendrerit mi a rutrum. Fusce a erat iaculis, aliquam nibh eget, sollicitudin leo. Curabitur vehicula dapibus rutrum. Cras euismod quis orci id ullamcorper. Suspendisse auctor dolor nisl. Fusce eget odio non neque egestas tristique. Phasellus quis pretium mauris, sit amet porta nisl. Integer dapibus ex vitae sodales molestie. Duis ac tempor nunc. Nullam tellus purus, tempus eget turpis at, ullamcorper dapibus elit.
              </p>
            </Col>
          </Row>
        </Grid>

      </Page>
    );
  }
});
