// hall view.js
var model = require('./model');

exports.hall = function(req, res) {
  model.hall(function (err, msgs) {
    if (err || !msgs) { 
      res.render('hall/hall',{});
    } else { 
      res.render('hall/hall',{messages: msgs});
    }
  });
};

exports.messagenew = function (req, res) {
  var userdata = {};
  userdata.username = req.session.username;
  model.messagenew(userdata, req.body, function (err, doc) {
    if (err || !doc) {
      return res.end(JSON.stringify({ status: false }));
    } else {
      return res.end(JSON.stringify({ status: true  }));
    }
  });
};
