'use strict'
const bittrex = require('node.bittrex.api');
exports.task = {
  name: 'bittrex',
  description: 'an actionhero task',
  frequency: 0,
  queue: 'normal',
  middleware: [],

  run: function(api, params, next) {
    console.log('task run');
    bittrex.websockets.listen( function( data ) {
      if (data.M === 'updateSummaryState') {
        data.A.forEach(function(dataFor) {
          dataFor.Deltas.forEach(function(marketsDelta) {
            api.chatRoom.broadcast({}, 'tick', marketsDelta, function(err) {
              if (err) {
                console.log('tick err');
                console.log(err);
              }
            });
          });
        });
      }
    });

    return next();
  }
};
