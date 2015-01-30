var Cylon = require('cylon');

// ensure you install the API plugin first:
// $ npm install cylon-api-http
Cylon.api({
  host: "0.0.0.0",
  port: "8888"
});


Cylon.robot({
  name: "edison",

  connections: {
    loopback: { adaptor: "loopback" }
  },

  devices: {
    ping: { driver: "ping" },
  },

  work: function() {},

  doAThing: function() {
    console.log("Hello, human!");
  }
});


// GET /api/robots/edison/commands
// => ['doAThing']