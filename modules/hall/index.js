// hall 模块，信息大厅, 显示所有人发的状态
var view = require('./view');


exports.register = function (app) {
  // TODO: hall module.
  app.get('/hall', view.hall);
  app.post('/admin/messagenew', view.messagenew);
};

