const gpio = require('linkit-smart-gpio')

gpio.register('2', 'output')

var state = false

setInterval(() => {
  gpio.send('2', function() {
    if(state) {
      gpio.high()
    } else {
      gpio.low()
    }
  })
}, 1000)
