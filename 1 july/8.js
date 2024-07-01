/*  8. filter even numbers then square them. Assign the result to a variable named squaredEvenNums and display it.
let nums = [11, 22, 33, 46, 75, 86, 97, 98];
Expected output :
squaredEvenNums: [484, 2116, 7396, 9604]  */

let nums = [11, 22, 33, 46, 75, 86, 97, 98];


function fil(arr) {
    let even = []
    for (let x of arr) {
        if (x % 2 == 0) {
            even.push(x)
        }
    }
    return even;
}


let evens = fil(nums);
let squaredEvenNums = evens.map((data) => (data ** 2))
console.log(squaredEvenNums);