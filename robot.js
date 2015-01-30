var Cylon = require('cylon');

Cylon.api({
  host: '127.0.0.1',
  port: '4321',

  cert: '/path/to/ssl/cert',
  key: '/path/to/ssl/key',

  auth: {
    type: 'basic',
    user: 'root',
    pass: 'password'
  }
});


Cylon.robot({
  connections: {
    loopback: { adaptor: 'loopback' }
  },

  work: function() {
    every((1).second(), function() {
      console.log("Hello, human!");
    });
  }
}).start();