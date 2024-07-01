/*  17.students = [
    { name: "Ram", age: 17, bdate: "12/06/2005", city: "Pune" },
    { name: "Shyam", age: 17, bdate: "17/01/1989", city: "Delhi" },
    { name: "Mohan", age: 30, bdate: "23/10/2000", city: "Pune" },
    { name: "Shyam", age: 15, bdate: "29/04/1989", city: "Kolkata" },
    { name: "Satish", age: 30, bdate: "17/01/1989", city: "Delhi" },
    { name: "Sundar", age: 15, bdate: "29/04/1989", city: "Surat" },
  ];
  Write a javascript program that accept an array and key. It should return a new Object grouped by key.  */


function groupBy(array, key) {
    return array.reduce((result, currentValue) => {
        // Get the value of the key
        let groupKey = currentValue[key];

        // Initialize the group if it doesn't exist
        if (!result[groupKey]) {
            result[groupKey] = [];
        }

        // Push the current object into the group
        result[groupKey].push(currentValue);

        return result;
    }, {});
}

// Example usage:
const students = [
    { name: "Ram", age: 17, bdate: "12/06/2005", city: "Pune" },
    { name: "Shyam", age: 17, bdate: "17/01/1989", city: "Delhi" },
    { name: "Mohan", age: 30, bdate: "23/10/2000", city: "Pune" },
    { name: "Shyam", age: 15, bdate: "29/04/1989", city: "Kolkata" },
    { name: "Satish", age: 30, bdate: "17/01/1989", city: "Delhi" },
    { name: "Sundar", age: 15, bdate: "29/04/1989", city: "Surat" },
];

const groupedByCity = groupBy(students, 'city');
console.log(groupedByCity);

