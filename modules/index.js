// modules 模块，是所有模块的对外接口
var fs = require('fs');

// 引入子模块
var account = require('./account');
var userself = require('./userdata');
var hall = require('./hall');

var modulespath = "./modules/";
var m = {};
// 检测当前目录下的模块，并依此加载
m.registers = function (app) {
  var result = [], files = fs.readdirSync(modulespath);
  files.forEach(function(file) {
    stat = fs.lstatSync(modulespath + "/" + file);
    if (stat !== undefined && stat.isDirectory()) {
      require("./" + file).register(app);
    }
  });
};

// 将m作为对外接口
module.exports = m;

