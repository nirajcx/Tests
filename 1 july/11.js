/*
11. Implement a function that takes an array of integers as input and returns the maximum difference between any two elements in the array.
 If there are less than two elements in the array, return null.
Test Data -> maxDiff([2, 5, 7, 1, 9, 3]);
Expected Output -> 8

*/
let test= [2, 5, 7, 1, 9, 3];
let max=Math.max(...test);
let min=Math.min(...test);

let maxDiff = max - min;
console.log(maxDiff);