<b>JSON Rules</b>

> Set of methods that takes in the column name and test the rule

<b>Available Methods</b>

1. <h1>.isNull()</h1>
2. <h1>.isNotNull()</h1>



# .isNull()

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

# .isNotNull()

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