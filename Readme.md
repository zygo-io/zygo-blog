# Zygo Example App

A very simple app to illustrate [zygo](http://www.github.com/Bubblyworld/zygo)  usage. Things are a little hacky at the moment as the server side of the project is not yet implemented.

## Installation

Clone the [zygo-example](http://www.github.com/Bubblyworld/zygo-example) repo:

``` sh
$ git clone git@github.com:Bubblyworld/zygo-example.git
```

Install the dependencies, and simply run the server through node.
``` sh
$ npm install
$ jspm install
$ node server.js
```

If you don't already have [JSPM](http://www.github.com/jspm/jspm-cli) installed, you can get it with:
``` sh
$ npm install -g jspm
```

## How It Works

Open the `index.html` file and you will notice a few things:

<br />

``` html
<script src="jspm_packages/system.js"></script>
<script src="config.js"></script>
```
This is where we include the [System.js](githubb.com/systemjs/systemjs)loader and the [JSPM](http://www.github.com/jspm/jspm-cli) config file. This tells [System.js](githubb.com/systemjs/systemjs) where to find our application files.

<br />

``` html
<div id="__zygo-body-container__"/>
```
This is the container div that [zygo](http://www.github.com/Bubblyworld/zygo) renders the app to.

<br />

``` html
<script>
System.import('zygo').then(function(zygo) {
  zygo._setInitialState({
    route: {}
  });

  zygo._setRoutes({
    '/one': 'lib/one-handler',
    '/two': 'lib/two-handler'
  });

  zygo.route('/one');
});
</script>
```
This script loads the [zygo](http://www.github.com/Bubblyworld/zygo) client, and proceeds to initialise the state and routes. The browser is then pointed to the `/one` route. For more information on the router format and other details, see [zygo](http://www.github.com/Bubblyworld/zygo).

Note that the handler files are specified with their [JSPM](http://www.github.com/jspm/jspm-cli) module paths.

## The Handlers
``` javascript
export default function(state) {
  return Promise.resolve().then(function() {
    return {
      component: 'lib/one.jsx!',
      title: 'Page One'
    };
  });
}
```
The handlers are very simple - they just return a promise that resolves to their respective component and page title. Note the use of `jsx!` in the [JSPM](http://www.github.com/jspm/jspm-cli) path, telling the [System.js](githubb.com/systemjs/systemjs) loader to use the jsx plugin to load the component.

## The Components
``` javascript
import React from 'react';
import Page from './page.jsx!';
import 'lib/one.css!';

import * as zygo from 'zygo/lib/zygo-client';

export default React.createClass({
  render: function() {
    return (
      <Page>
        <div className="one disable-select" onClick={this.clickHandler}>
          One.
        </div>
      </Page>
    );
  },

  clickHandler: function() {
    zygo.route('/two');
  }
});
```
The components are similarly simple. They simple export a react class to be rendered when the route is active. The stylesheet for the class is imported using the [System.js](githubb.com/systemjs/systemjs) css plugin.
