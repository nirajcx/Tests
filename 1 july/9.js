/*  9. Write a program to merge two JSON objects into one. Use the following two JSON objects:
object 1 = { "name": "John Doe", "age": 30 }
object 2 = { "address": { "street": "123 Main St", "city": "Anytown", "state": "CA", "zip": "12345" } }

Merge the two objects into one.
Print the merged object to the console.  */

let object1 = { "name": "John Doe", "age": 30 };
let object2 = { "address": { "street": "123 Main St", "city": "Anytown", "state": "CA", "zip": "12345" } };

let merg = {...object1,...object2};
console.log(merg);