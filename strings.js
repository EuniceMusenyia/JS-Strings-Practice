// creating a string
let dice1 = 3;
let dice2 = 5;
let roll = (`You rolled a ${dice1} and ${dice2} they sum to ${dice1+dice2}`);
console.log(roll);

// console.log(roll.trim(""));



// replace a string with another string.
console.log(roll.replace (`You`, `I`));





const myName = 'eunice';
let greet = "Hello";
const greetMe= (`${greet} ${myName}`)
console.log(greetMe);

// returns part of a string.
console.log(greetMe.slice ((5)));
console.log(greetMe.slice ((4)));


// split a string 
console.log(greetMe.split(" "));

// return part of a string
console.log(greetMe.substring(3 , 6));

// finding character in string
console.log(myName[1]);
console.log(myName.charAt(1));
console.log(myName.lastIndexOf `e`);


// assigning variable name to a new string
greet = "Hi"
console.log(greet);

// strictly equal to and equal to
console.log(greet === myName);
let a = "h"
let b = "H"
console.log(a == b);

// multiline strings
const message = `we use the operator` +
                `to write multline strings`
console.log(message);

// length of a string
console.log(myName.length);

// creating string objects and identifying the type 
const name = new String ("Senyia")
console.log(typeof myName);
console.log(typeof name);

// join two strings
console.log(myName.concat (name));



