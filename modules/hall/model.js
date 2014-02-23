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

exports.messagenew = function(msg, callback) {
  message.insert(msg, function (err, doc) {
    callback(err, doc);
  });
};
