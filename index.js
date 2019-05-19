'use strict';

const chalk = require('chalk');

var nullFormat = 'NULL';

exports.setNull = function(format) {
    nullFormat = format;
}

exports.isNullRule = function(column) {
    return this[`${column}`] == nullFormat;
}

exports.isNotNullRule = function(column) {
    return this[`${column}`] != nullFormat;
}

exports.isCompareRule = function(column1, column2, operator) {
    return eval(`${this[`${column1}`]} ${operator} ${this[`${column2}`]}`)
}