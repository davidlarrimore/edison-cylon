var Cylon = require('cylon');

ar Cylon = require("cylon");

// ensure you install the API plugin first:
// $ npm install cylon-api-http
Cylon.api({
  host: "0.0.0.0",
  port: "8080"
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
});


Cylon.start();


// GET /api/robots/testbot/commands
// => ['doAThing']