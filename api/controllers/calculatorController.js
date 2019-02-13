'use strict';


var mongoose = require('mongoose'),
  Calc = mongoose.model('calcs');


exports.list_all_operations = function(req, res) {
  Calc.find({}, function(err, calc) {
   if (err)
     res.send(err);
   res.json(calc);
});
};


exports.operate = function(req, res) {

var newOp = new Calc(req.body);
var firstN = parseInt(newOp.firstNumber);
var secondN = parseInt(newOp.secondNumber);
var operatorN = newOp.operator;

if (operatorN == 's')
  newOp.resultNumber = firstN + secondN;
if (operatorN == 'r')
  newOp.resultNumber = firstN - secondN;
if (operatorN == 'm')
  newOp.resultNumber = firstN * secondN;
if (operatorN == 'd')
  newOp.resultNumber = firstN / secondN;

newOp.save(function(err, calc) {
   if (err)
     res.send(err);
   res.json(calc);

  });
};

exports.get_operation = function(req, res) {
  Calc.findById(req.params.calcId, function(err, calc) {
    if (err)
      res.send(err);
    res.json(calc);
  });
};


exports.delete_operation = function(req, res) {


  Calc.remove({
    _id: req.params.calcId
  }, function(err, calc) {
    if (err)
      res.send(err);
    res.json({ message: 'Operation successfully deleted' });
  });
};
