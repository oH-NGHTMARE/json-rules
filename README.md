<h1 style="text-align:center"><b>JSON Rules</b></h1>

![travis build](https://img.shields.io/travis/rust-lang/rust.svg)

> Set of methods that takes in the column name and test the rule

<b>Available Methods</b>

<ul>
    <li>isNullRule</li>
    <li>isNotNullRule</li>
    <li>isCompareRule</li>
</ul>



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