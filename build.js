var Zygo = require('zygo-server');
var zygo = new Zygo('zygo.json');

zygo.initialise()
  .then(zygo.build.bind(zygo))
  .catch(function(error) { console.log(error.stack); });

