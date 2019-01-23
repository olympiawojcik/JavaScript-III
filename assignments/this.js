/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding- When a function is declared in global scope, THIS will point to the window object.
* 2. Implicit (Automatic) Binding-  A method is a function bound to an object and stored as an object property. 
When a method is called/invoked, THIS points to the object on the LEFT of the dot.
* 3. New Binding- We use constructor functions as a blueprint to create many object of the same type. When we call
the constructor function with the *new* keyword, it creates a new object of the same type. THIS will point to the
specific *instance* of the object that's created and returned by the constructor function. 
* 4. Explicit Binding- We can explicitly define what THIS will point to by using Javascript's call or apply method.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function whatTree() {
    console.log(`this ====${this}`)
    console.log('this points to a Window/Globalobject')
}

whatTree()

// Principle 2

// code example for Implicit Binding
//Step 1: Create an object with a method
const myPerson = {
    firstname: "John",
    lastname: "Doe",
    sayhello: function() {
        console.log(`${this.firstname} says hello`);
        console.log('Implicit This is pointing to --->', this);
    }
}
//Step 2:Invoke Method on my Object
myPerson.sayhello();

// Principle 3

// code example for New Binding
//Step 1: Create constructor function

function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.introduction = function() {
        console.log(`hi my name is ${this.firstName} ${this.lastName}`)
    }
    this.whatIsThis = function () {
        console.log('This is pointing to --->', this)
    }
}

//Step 2: Call the constructor function using NEW
var johnDoe = new Person("John", "Doe", 50);

//Step 3: Now we can access properties and methods on our JohnDoe object
console.log(johnDoe.firstName);
johnDoe.introduction();
johnDoe.whatIsThis();

// Principle 4

// code example for Explicit Binding
//Step 1: 

const person = {
    firstName: function() {
        console.log(`hi my name is ${this.firstName}`);
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

const person2 = {
    firstName: "Sally",
    lastName: "Doe"
}

person.firstName.call(person1);
person.firstName.call(person2);
