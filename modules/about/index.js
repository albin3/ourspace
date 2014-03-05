// about 模块，信息大厅, 显示所有人发的状态
var view = require('./view');


exports.register = function (app) {
  // TODO: about module.
  app.get('/ourspace/about', view.about);
};

