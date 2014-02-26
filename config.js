// 为整个程序提供配置文件

var config = {}
config.dbinfo = {
  dburl: "localhost:27017",
  dbhost: "localhost",
  dbport: "27017",
  dbname: "ourspace",
  dbpath: "mongodb://localhost:27017/ourspace?w=1",
  dbmongoose: "mongodb://localhost/ourspace"
};

module.exports = config;
