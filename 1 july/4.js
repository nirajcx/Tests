/*   4. Sort below array of objects by age values
Test Data:
[
    { name: "Ram", age: 17 },
    { name: "Mohan", age: 30 },
    { name: "Shyam", age: 15 },
    { name: "Shyam", age: 17 },
]
Expected Output:
[
    { name: 'Shyam', age: 15 },
    { name: 'Ram', age: 17 },
    { name: 'Shyam', age: 17 },
    { name: 'Mohan', age: 30 }
]   */

let test = [
    { name: "Ram", age: 17 },
    { name: "Mohan", age: 30 },
    { name: "Shyam", age: 15 },
    { name: "Shyam", age: 17 },
];

test.sort((a,b)=> a.age - b.age)
console.log(test);