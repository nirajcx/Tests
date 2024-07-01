// 1. Write a JavaScript function to capitalise the first letter of each word in a string.
// Test data: "js string exercises"

// Expected output: "Js String Exercises"

let test = "js string exercises";

function capitalize(str){
    return str.split(" ").map((data)=> data[0].toUpperCase() + data.slice(1)).join(" ")
}

console.log(capitalize(test));