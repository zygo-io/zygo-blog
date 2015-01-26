var Zygo = require('zygo-server');
var zygo = new Zygo('zygo.json');

zygo.initialize()
  .then(function() {
    zygo.createServer();
  });
