'use strict'

module.exports = {
  loadPriority: 1000,
  startPriority: 1000,
  stopPriority: 1000,
  initialize: function (api, next) {
    api.bittrex = {};
    return next();
  },
  start: function (api, next) {
    console.log("STARTSSS@@#@#asd@#");
    api.tasks.enqueue('bittrex', {}, 'normal', function(err) {
      console.log(err);
    });
    return next();
  },
  stop: function (api, next) {
    return next();
  }
};
