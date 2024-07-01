/*  13. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.
Test Data -> 025468
Expected output -> 0-254-6-8.  */

let str = "025468";

function pr(data) {
    let arr = [];
    for (let x of data) {
        if (x % 2 == 0) {
            arr.push(x);
            arr.push("-");
        } else {
            arr.push(x);
        }
    }


    if (arr[arr.length - 1] == "-") {
        arr.pop();
    }
    return arr.join("");
}
let ans = pr(str);
console.log(ans);