const myObject = {
    a: 1,
    b: 2,
};


Object.defineProperty(myObject, 'c', {
    // descriptor 
    writable: false,
    enumerable: true,
    configurable: false,
    value: 3,
});

console.log('OBJECT METADATA');
console.log(myObject);

// Change c value 
// writable true --> change value 
console.log('WRITABLE');
myObject.c = 4;
console.log(myObject);

// // can't redefine @ write false 
// Object.defineProperty(myObject, 'c', {
//     writable: true,
//     enumerable: true,
//     configurable: false,
//     value: 5,
// });
// console.log(myObject);

// looping
// enumerable true --> looping
console.log('ENUMERABLE');
for (let key in myObject) {
    console.log(key, myObject[key]);
}

// configurable true --> delete
console.log('CONFIGURABLE');
console.log(delete myObject.c);


// More than one property added 
Object.defineProperties(myObject, {
    // d descriptor 
    d: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 4,
    },
    // e descriptor
    e: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 5,
    },
});

console.log('MORE THAN ONE PROPERTY');
console.log(myObject);

console.log('GET DESCRIPTOR OF A PROPERTY');
console.log(Object.getOwnPropertyDescriptor(myObject, 'd'));
console.log('GET DESCRIPTORS OF OBJECTS');
console.log(Object.getOwnPropertyDescriptors(myObject));