class User {
    constructor(id, username, email) {
        this.id = id;
        this.username = username;
        this.email = email;
    }

}

console.log(User.prototype);

let userOne = new User(1, 'John', 'john@gmail.com');
console.log(userOne);
// prototype chaining  
User.prototype.sayWelcome = function () {
    return `Welcome ${this.username}`;
}

Object.prototype.love = "Me :D";
console.log(Object.prototype);

// userOne inherits from the User and the Object prototype 
console.log(userOne.love);

// String prototype
String.prototype.addDotBeforeAndAfter = function () {
    return `.${this}.`;
}
let myString = "Hello";
console.log(myString.addDotBeforeAndAfter());

// Array prototype
Array.prototype.addDotBeforeAndAfter = function () {
    return `.${this}.`;
}
let myArray = [1, 2, 3];
console.log(myArray.addDotBeforeAndAfter());