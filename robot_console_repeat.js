var Cylon = require('cylon');

Cylon.robot({
  name: "edison",

  connections: {
    loopback: { adaptor: 'loopback' }
  },

  work: function() {},

  doAThing: function() {
    console.log("I did a thing!");
  }
}).start();