// account 模块
var view = require('./view');

exports.register = function (app) {
  app.get('/', view.signin);
};
