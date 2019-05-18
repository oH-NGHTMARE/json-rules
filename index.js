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