# anyrandom

anyrandom is a npm package to generate anything random.

![ar](anyrandom.png)

## Install the package 📥

`npm install anyrandom`

## Functions📚

### Random Number 🔢

```javascript
const { number } = require("anyrandom");

console.log(number(41)); // 41 being the max number
```

### Random Letter🔡

```javascript
const { letter } = require("anyrandom");

console.log(letter());
```

### Random Character🔠

```javascript
const { character } = require("anyrandom");

console.log(character());
```

### Random String🧵

```javascript
const { string } = require("anyrandom");

console.log(string(41)); // 41 being the length of the string
```

### Shuffle String🔀

```javascript
const { shuffleString } = require("anyrandom");

console.log(shuffleString("Hello World"));
```

### Random Character from String🔍

```javascript
const { randomFrom } = require("anyrandom");

console.log(randomFrom("Hello World"));
```
