/*
 Implement a function that takes an array of objects as input and returns a new array containing only the objects that have a property with a specific value.

Example input and output:
const users = [
{ name: 'John', age: 30 },
{ name: 'Mary', age: 25 },
{ name: 'Bob', age: 40 }
];
filterObjects(users, 'age', 30);
Expected Output: [{ name: 'John', age: 30 }]
*/

const users = [
    { name: 'John', age: 30 },
    { name: 'Mary', age: 25 },
    { name: 'Bob', age: 40 }
];

function extract(obj, prop, value) {
    return obj.filter((data) => (data[prop] == value))
}

console.log(extract(users, "age", 30));