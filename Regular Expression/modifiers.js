let myString = "Hello World Web School. I love the world";

// PATTERNS WITH THE LITERAL NOTATION
let regex = /World/;

console.log(myString.match(regex));
// [
//     'World',
//     index: 6,
//     input: 'Hello World Web School. I love the World',
//     groups: undefined
// ]
console.log(myString.search(regex));
// 6


// MODIFIERS + MATCH + SEARCH
// i: insensitive for caps
regex = /World/i;
console.log("i modifier:", myString.match(regex));

// g: global search
regex = /World/ig;
console.log("ig modifiers:", myString.match(regex));

// CREATE PATTERNS WITH REGEXP OBJECT CONSTRUCTOR FUNCTION
let re = /ab+c/i; // this is literal notation 
re = new RegExp("ab+c", "i"); // this is the constructor notation