var Cylon = require('cylon');

// ensure you install the API plugin first:
// $ npm install cylon-api-http
Cylon.api({
  host: "127.0.0.1",
  port: "8888"
});


Cylon.robot({
  name: "edison",

  connections: {
    edison: { adaptor: 'intel-iot' }
  },

  devices: {
    led: { driver: 'led', pin: 13 }
  },

  work: function() {},

  blink: function() {
    led.toggle;
  }
});


// GET /api/robots/edison/commands
// => ['blink']