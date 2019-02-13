'use strict';
module.exports = function(app) {
  var calculator = require('../controllers/calculatorController');


  // calculator Routes
  app.route('/calcs')
    .get(calculator.list_all_operations)
    .post(calculator.operate);


  app.route('calcs/:calcId')
    .get(calculator.get_operation)
    .delete(calculator.delete_operation);
};
