# Day 14: Classes

## Tasks/Activities:

### Activity 1: Class Definition

#### Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    return `Hello ${this.name} Welcome!`;
  }
}

const persondetail = new Person("vishal", "22");
console.log(persondetail.greeting());
```

#### Task 2: Add a method to the Person class that updates the age property and log the updated age.

```js
Person.prototype.incrementAge = function () {
  this.age++;
};
console.log(persondetail.incrementAge());
console.log(persondetail.age);
```

### Activity 2: Class Inheritance

#### Task 3: Define a class StudentId and a method to return the student ID. Create an instance the Student class and log the student ID.

```js
class StudentId {
  constructor(studentId) {
    this.studentId = studentId;
  }
  returnStudentId() {
    return this.studentId;
  }
}
const student = new StudentId("33");
console.log(student.returnStudentId());
```

#### Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

```js
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
  greeting() {
    return `Hello ${this.name} Welcome! Your StudentId is ${this.studentId}`;
  }
}
const studentGreeting = new Student("vishal", "22", "4342");
console.log(studentGreeting.greeting());
```

### Activity 3: Static Methods and Properties

#### Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

```js
Person.prototype.staticGreeting = function () {
  return "Welcome! Have a good time";
};
console.log(Person.prototype.staticGreeting());
```

#### Task 6: Add a static property to the student class to keep track of the number of students created. increment this property in the constructor and log the total number of students.

```js
class Students extends Person {
  static studentCount = 0;
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Students.studentCount++;
  }
  greeting() {
    return `Hello ${this.name} Welcome! Your StudentId is ${this.studentId}`;
  }
  static getStudentCount() {
    return `Total number of Students: ${this.studentCount}`;
  }
}
const student1 = new Students("Vishal", "22", 1);
const student2 = new Students("Vjay", "22", 2);
const student3 = new Students("Vinay", "21", 3);
console.log(Students.getStudentCount());
```

### Activity 4: Geeters and Setters

#### Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.

```js
Object.defineProperty(Person.prototype, "FullName", {
  get: function () {
    return `FullName id ${this.name}`;
  },
  enumerable: true,
  configurable: true,
});
const person1 = new Person("Vishal Desai", 22);
console.log(person1.FullName);
```

#### Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.

```js
Object.defineProperty(Person.prototype, "ChangeName", {
  set: function ({ name }) {
    this.name = name;
  },
  enumerable: true,
  configurable: true,
});
person1.ChangeName = { name: "vd" };
console.log(person1.name);
```

### Activity 5: Private Fields(Optional)

#### Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

```js
class Account {
  #balance;

  constructor(initalBalance) {
    if (initalBalance < 0) {
      throw new Error("Initial Balance cannot be negative");
    }
    this.#balance = initalBalance;
  }
  deposit(amount) {
    if (amount < 0) {
      throw new Error("Deposit amount must be positive");
    }
    this.#balance += amount;
  }
  withdraw(amount) {
    if (amount < 0) {
      throw new Error("Withdraw amount must be positive");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient Balance");
    }
    this.#balance -= amount;
  }
  getBalance() {
    return this.#balance;
  }
}
```

#### Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

```js
const myAccount = new Account(1000);
console.log(myAccount.getBalance());

myAccount.deposit(500);
console.log(myAccount.getBalance());

myAccount.withdraw(1000);
console.log(myAccount.getBalance());
```
