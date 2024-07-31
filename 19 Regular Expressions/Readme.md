# Day 19: Regular Expressions

## Tasks/Activities:

### Activity 1: Basic Regular Expressions

#### Task 1: Write a regular expression to match a sinple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log hte matches.

```js
const text =
  "This is Day 19  of JavaScript Challenge.And i Love JavaScript -- 2024";
const regex = /JavaScript/g;

const matches = text.match(regex);
console.log(matches);
```

#### Task 2: Write a regular expression to match all digits in a string. Log the matches.

```js
const regex2 = /\d+/g;
const maatches2 = text.match(regex2);
console.log(maatches2);
```

### Activity 3: Grouping and Capturing

#### Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g, (123) 4567890).Log the captures.

```js
const phoneNumber = "(123) 4567890";
const regex3 = /\((\d{3})\)\s*(\d{3})(\d{4})/;

const matches3 = phoneNumber.match(regex3);
if (matches3) {
  const areaCode = matches3[1];
  const centralOfficeCode = matches3[2];
  const lineNumber = matches3[3];

  console.log("Area Code:", areaCode); // Output: "123"
  console.log("Central Office Code:", centralOfficeCode); // Output: "456"
  console.log("Line Number:", lineNumber); // Output: "7890"
} else {
  console.log("No match found.");
}
```

#### Taak 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

```js
const email = "username@example.com";
const regex4 = /^([\w.-]+)@([\w.-]+\.[a-zA-Z]{2,})$/;

const matches4 = email.match(regex4);
if (matches4) {
  const username = matches4[1];
  const domain = matches4[2];

  console.log("Username:", username); // Output: "username"
  console.log("Domain:", domain); // Output: "example.com"
} else {
  console.log("No match found.");
}
```

### Activity 4: Assertions and Boundaries

#### Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the martches.

```js
const text2 =
  "JavaScript is a popular programming language. JavaScript is also versatile.";
const regex5 = /^(\w+)/;

const matches5 = text2.match(regex5);
if (matches5) {
  const wordAtStart = matches5[1];
  console.log("Word at the beginning of the string:", wordAtStart); // Output: "JavaScript"
} else {
  console.log("No match found.");
}
```

#### Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the martches.

```js
const text3 = "JavaScript is a popular programming language.";
const regex6 = /(\w+)\.$/;

const matches6 = text3.match(regex6);
if (matches6) {
  const wordAtEnd = matches6[1];
  console.log("Word at the end of the string:", wordAtEnd); // Output: "language"
} else {
  console.log("No match found.");
}
```

### Activity 5: Practical Applications

#### Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter,one lowercase letter, one digit,and one special character). Log whether the password id valid.

```js
const password = "Password123!";
const regex7 =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const isValid = regex7.test(password);
console.log("Is the password valid?", isValid); // Output: true or false
```

#### Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.

```js
const url = "https://www.example.com";
const regex8 =
  /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(\/[a-zA-Z0-9-_.~?&=]*)*\/?$/;

const isValid1 = regex8.test(url);
console.log("Is the URL valid?", isValid); // Output: true or false
```
