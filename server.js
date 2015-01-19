var Zygo = require('zygo-server');
var zygo = new Zygo('zygo.json');

zygo.initialise()
  .then(function() { zygo.build(); })
  .then(function() { zygo.createServer(); })
  .catch(function(error) { console.log(error.stack); });
