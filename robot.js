var Cylon = require('cylon');

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