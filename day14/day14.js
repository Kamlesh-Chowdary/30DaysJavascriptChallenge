//Activity 1: Class Definition

//Task 1:  Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
  constructor(name, age, firstName, lastName) {
    this.name = name;
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Greeting to ${this.name}.`;
  }
}

const person1 = new Person("Kamlesh", 24);
console.log(person1.greeting());

//Task 2: Add a method to the Person class that updates the age property and logs the updated age.

Person.prototype.editAge = function (age) {
  this.age = age;
};

person1.editAge(2);
console.log(person1.age);

//Activity 2: Class Inheritance

//Task 3:  Define a class Student  that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.

class Student extends Person {
  static count = 0;
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    this.count = Student.count++;
  }

  getStudentId() {
    return this.studentId;
  }
}

const student1 = new Student("Kumar", 21, "std123");

console.log(student1.getStudentId());

//Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

Student.prototype.greeting = function () {
  return `Greeting to ${this.name} with Student Id : ${this.studentId}`;
};

console.log(student1.greeting());

//Activity 3: Static Methods and Properties

//Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

Person.greetAll = function () {
  return "Greetings from Person class";
};

console.log(Person.greetAll());

//Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

console.log(Student.count);
const student2 = new Student("kamlesh", 34, 324);
console.log(Student.count);
//Activity 4: Getters and Setters

//Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.

Person.prototype.getter = function () {
  return `Full name: ${this.firstName} ${this.lastName}`;
};
const person2 = new Person("Rahul", 30, "Rahul", "Choyal");
console.log(person2.getter());

//Task 8: Add a setter method to the Person class to update the name properties (firstname and lastname). Update the name using the setter and log the updated full name.

Person.prototype.setter = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

person2.setter("Choyal", "Rahul");
console.log(person2.getter());

//Activity 5: Private Fields (Optional)

//Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
  #balance;
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withDraw(amount) {
    if (amount > this.#balance) {
      console.log("Not enough Balance");
    } else {
      this.#balance -= amount;
    }
  }
  getBalance() {
    return this.#balance;
  }
}

//Task 10:Create and instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

const customer = new Account(500);
console.log(customer.getBalance());
customer.deposit(500);
console.log(customer.getBalance());
customer.withDraw(1000);
console.log(customer.getBalance());
