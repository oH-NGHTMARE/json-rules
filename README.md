<h2 style="text-align:center"><b>JSON Rules</b></h2> | <b>Instagram @chrisbradley.ig</b>

[![npm build](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://github.com/oH-NGHTMARE/json-rules)

> Set of methods that takes in the column name and test the rule

<b>Available Methods</b>

<ul>
    <li>isNullRule</li>
    <li>isNotNullRule</li>
    <li>isCompareRule</li>
</ul>

> This package will allow you to check an objects key:value and apply a rule to is based of the param name.

<h3>Quickstart</h3>

```
'use strict';

const jsonRules = require('json-rules');

Object.prototype.isNull = jsonRules.isNullRule;
Object.prototype.isNotNull = jsonRules.isNotNullRule;
Object.prototype.isCompare = jsonRules.isCompareRule;

const user = {
    'Name': 'Chris',
    'Age': 21,
    'Vender': 'Tree',
    'Age Restriction': 'null',
    'Age Limit': 18
}

jsonRules.setNull('null'); // Defualts to NULL (String Type) if not set

console.log(user.isNotNull('Name'), user.isCompare('Age', 'Age Limit', '>'))
```


> <b>.isNull()</b>

<p>Attach this method to an object then pass in the column name you want to test.</p>

```
// Access using 
Object.prototype.isNull = jsonRules.isNullRule;

const user = {
    'Name': 'Chris',
    'Age': 21,
    'Vender': 'Tree',
    'Age Restriction': 'NULL'
}

user.isNull('Age Restriction') // Output = true
```

> <b>.isNotNull()</b>

<p>Attach this method to an object then pass in the column name you want to test.</p>

```
// Access using 
Object.prototype.isNotNull = jsonRules.isNotNullRule;

const user = {
    'Name': 'Chris',
    'Age': 21,
    'Vender': 'Tree',
    'Age Restriction': 'NULL'
}

user.isNotNull('Name') // Output = true
```

> <b>.isCompare()</b>

<p>Attach this method to an object then pass in the column name you want to test.</p>

```
// Access using 
Object.prototype.isCompare = jsonRules.isCompareRule;

const user = {
    'Name': 'Chris',
    'Age': 21,
    'Vender': 'Tree',
    'Age Restriction': 'NULL',
    'Age Limit': 18
}

user.isCompare('Age', 'Age Limit', '>') // Output = true
```