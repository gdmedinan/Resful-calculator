'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var calcSchema = new Schema({

  firstNumber:  {

	type: String,
	requiered: 'please enter first number'
	},
  secondNumber:  {

	type: String,
	required: 'please enter second number'
  	},
  operator:  {

	type: String,
	required: 'please enter the operator'
	},
  resultNumber:  {

	type: String,
	default: 0
	}
});

module.exports = mongoose.model('calcs', calcSchema );
