// hall model.js
var config = require('../../config');
var mongojs = require('mongojs');
var db = mongojs(config.dbinfo.dbname);

var message = db.collection('messages');

exports.hall = function (callback) {
  message.find(function (err, docs) {
    callback(err, docs);
  });
};

exports.messagenew = function(userdata, msg, callback) {
  // 存储发表消息的用户名
  msg.username = userdata.username;
  msg.username = msg.username === undefined ? "null" : msg.username;
  // 存入数据库
  message.insert(msg, function (err, doc) {
    callback(err, doc);
  });
};
