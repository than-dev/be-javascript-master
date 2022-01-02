## 📡 Hoisting

<hr>
<br>

### 🌾 What is

<br>

Hoisting is basically a behavior from javascript that we can see in execution time, it makes functions and variables go to the top of the scope in which they were declared.

<br>
<hr>
<br>

### 💀 const, var & let

<br>

Before see some examples, we need to understand the difference between these three ways to declare a variable.

<br>

- **var**: On the start of javascript, we had only _var_, currently, we don't have reasons to use it, the hoisting concept is applied just to this type of declaration, and, it can be problematic by some reasons I will explain later. Another point we can say here is, its value can be reassigned.

- **let**: unlike _var_, hoisting is not applied to _let_, it's a reason to prefer it, but, like _var_, its value can be reassigned.

- **const**: like _let_, hoisting is not applied to it, another point about _const_ is that it can't has its value reassigned.

<br>

to stay tuned: in this case, reassigned means that variable can or not has a new value, don't think that it applies to object and arrays manipulation, we can do this normally.

<br>

resume: with _const_ and _let_ among us, prefer use they, when you will need to change the value from any variable in execution time, prefer _let_, unlike it, prefer _const_.

<br>
<hr>
<br>

### 🏇 Operation

<br>

**Functions:**

```
hoistMe() // output: I'm being executed by hoisting

function hoistMe() {
    console.log('I\'m being executed by hoisting')
}
```

In the example above, the hoisting works effective, repair we call the function before its initialization!

<br>
<hr>
<br>

**Variables:**

In this example, we use a _const_, referring to it, we repair that hoisting is not applyied!

```
console.log(assignedToConst) // output: cannot access before initialization

const assignedToConst = 'I will give an error cause hoisting not apply in const'
```

OBS: with _let_ the result would be the same

<hr>
<br>

Now we can see a interesting behavior from hoisting

```
console.log(assignedToVar) // output: cannot access before initialization

const assignedToVar = 'I will give an error cause hoisting not assign the value, just declares it on top'
```

executing this piece of code above, we see the specified output, it occurs because hoisting not assign the value, just declares on top! Pay attention with this behavior, it makes your code ready to bugs!

<hr>
<br>

Unusual use case but worth understanding:

```
handle = '\'hoisted\'';
console.log(handle); // output: 'hoisted'
var handle;
```

if we assign the value before and declare it later the hoisting is done successfully

<br>
<hr>
<br>

### 🌞 Considerations

<br>

This explained concept works independent the scope, still the presented examples be all at global scope, for example:

```
function anotherHoistTest() {
    hoistMe()

    function hoistMe() {
        console.log('I\'m being hoisted inside another function');
    }
}

anotherHoistTest() // output: I'm being hoisted inside another function
```

<br>

I think is good say to you do not enjoy from this behavior, it makes your code more fragile and less readable and concise.

<br>
<hr>
<br>

### 🌴 Author

<br>

Nathan Cotrim:

- https://linktr.ee/nate.sfteng
- https://medium.com/@nathan.sfteng/javascript-hoisting-1a11356363ac
- https://dev.to/nate_sfteng/javascript-hoisting-5192
