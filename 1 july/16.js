/*  16. Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.
Test input: [10,20,10,40,50,60,70], target=50
Expected output: 2, 3  */

let arr = [10, 20, 10, 40, 50, 60, 70];
let target = 50;
let ans = [];

for (let x = 0; x <= arr.length - 2; x++) {
    for (let y = 1; y < arr.length; y++) {
        if (arr[x] + arr[y] == target) {
            ans.push(x, y)
        }
    }


}
let se = new Set([...ans]);
console.log(se);