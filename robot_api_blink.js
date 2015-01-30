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
    edison: { adaptor: 'intel-iot' },
    loopback: { adaptor: "loopback" }
  },

  devices: {
    led: { driver: 'led', pin: 13 },
    //ping: { driver: "ping" },
  },

  work: function() {},
  commands: {
    blink: function() { this.blinkMe.call(this); },
  },
    
  blinkMe: function() {   
    console.log("I did a thing!");
    every((1).second(), led.toggle);
  }
});


// GET /api/robots/edison/commands
// => ['blink']