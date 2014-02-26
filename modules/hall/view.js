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
  // model.messagenew() // TODO:
};
