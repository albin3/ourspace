// userself 模块,用户信息修改、头像更改
var view = require('./view');

exports.register = function (app) {
  // TODO: add get, post.
  app.get('/userdata', view.userdata);
};

