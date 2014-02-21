// modules 模块，是所有模块的对外接口

// 引入子模块
var account = require('./account');
var userself = require('./userself');
var hall = require('./hall');

var m = {};
// 将子模块挂在到m下方
m.registers = function (app) {
  account.register(app);
  userself.register(app);
  hall.register(app);
};

// 将m作为对外接口
module.exports = m;

