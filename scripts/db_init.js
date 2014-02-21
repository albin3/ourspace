// Copyright © 2014 Albin. All Rights Reserved.
// 配置系统环境，在mongodb中写入初始化信息
// 包括设置用户名唯一索引等...

var config = require('../config');
    MongoClient = require('mongodb'),
    password_hash = require('password-hash');

// 建立唯一索引，由于索引必须在已有的数据表中建立，所以重新打开数据库
MongoClient.connect("mongodb://" + config.dbinfo.dbhost + ":" + config.dbinfo.dbport 
    + "/" + config.dbinfo.dbname + "?w=1", function (err, db) {
      // account 索引
      db.dropDatabase(function () {
        var dbAccount = db.collection('account');
        dbAccount.ensureIndex({username: 1}, {unique: true, dropDups: true}, function (err) {
          if (err) { console.log(err.message); }
          else { console.log("create unique index success"); }
          db.close();
        });
      });
    });
