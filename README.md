<b>JSON Rules</b>

> Set of methods that takes in the column name and test the rule

<b>Available Methods</b>

<ul>
    <li>isNull</li>
    <li>isNotNull</li>
</ul>



> <b>.isNull()</b>

<p>Attach this method to an object then pass in the column name you want to test.</p>

```
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
const user = {
    'Name': 'Chris',
    'Age': 21,
    'Vender': 'Tree',
    'Age Restriction': 'NULL'
}

user.isNotNull('Name') // Output = true
```