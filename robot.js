var Cylon = require('cylon');

Cylon.api({
  host: 'localhost',
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
  name: "edison",
  connections: {
    "loopback": { adaptor: "loopback" }
  },

  devices: {
    "ping": { driver: "ping" }
  },

  work: function() {},

  doAThing: function() {
    console.log("I did a thing!");
  }
}).start();