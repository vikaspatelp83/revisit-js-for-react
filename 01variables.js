// variables and constants
/* 
    Number
    String
    Boolean
    Symbol (new in ES2015)
    Object
        Function
        Array
        Date
        RegExp
    null
    undefined
*/
// create a variable
//  -> let varname
//  -> const varname = "Value"
//  -> varname = "Value"

let name = "Vikas";
const constName = "Andy";
//  (let) can be modified
//  (const) can't be modified

console.log(name);
console.log(constName);
name = "Dave";
console.log(name);
// constName = "Sara";
// VM576:1 Uncaught SyntaxError: Identifier 'constName' has already been declared
console.log(constName);
friend = "Sara";
console.log(friend);

// *** 1.NUMBERS
/*Numbers in JavaScript are "double-precision 64-bit format IEEE 754 values", 
according to the spec —  There's no such thing as an integer in JavaScript 
(except BigInt), so you have to be a little careful. */

console.log(3 / 2); // 1.5, not 1
console.log(Math.floor(3 / 2)); // 1
console.log(43 + "43"); // 4343 no Error
console.log(43 + parseInt("43", 10)); // 86
