// Copyright © 2014 Albin. All Rights Reserved.
var view = require('./view');

exports.register = function (app) {
  app.get('/ourspace/figure/line', view.line);
};
