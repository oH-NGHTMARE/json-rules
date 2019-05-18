'use strict';

const jsonRules = require('../index');
const chalk = require('chalk');

Object.prototype.isNull = jsonRules.isNullRule;
Object.prototype.isNotNull = jsonRules.isNotNullRule;

const user = {
    'Name': 'Chris',
    'Age': 21,
    'Vender': 'Tree',
    'Age Restriction': 'NULL'
}

jsonRules.setNull('NULL'); // Defaults to NULL (String Type)

const test = [
    {
        'Test': 'Column is NULL',
        'Tried': 'Age Restriction',
        'Expected': true,
        'Response': user.isNull('Age Restriction')
    },
    {
        'Test': 'Column is NULL',
        'Tried': 'Vender',
        'Expected': false,
        'Response': user.isNull('Age')
    },
    {
        'Test': 'Column is not NULL',
        'Tried': 'Name',
        'Expected': true,
        'Response': user.isNotNull('Name')
    },
    {
        'Test': 'Column is not NULL',
        'Tried': 'Age Restriction',
        'Expected': false,
        'Response': user.isNotNull('Age Restriction')
    }
]

const results = test.filter(attempt => {
    return attempt['Expected'] != attempt['Response']
})

console.log(results.length === 0 ? chalk.green('All test passed') : results)