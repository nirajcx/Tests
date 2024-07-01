/*
12.Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]
*/

function first(array, n) {
    if (n == null) {
        return array[0];
    }
    if (n < 0) {
        return [];
    }
    return array.slice(0, n);
}

// Test Data
console.log(first([7, 9, 0, -2]));        // Expected output: 7
console.log(first([], 3));                // Expected output: []
console.log(first([7, 9, 0, -2], 3));     // Expected output: [7, 9, 0]
console.log(first([7, 9, 0, -2], 6));     // Expected output: [7, 9, 0, -2]
console.log(first([7, 9, 0, -2], -3));    // Expected output: []
