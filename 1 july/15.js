/*  15. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
Test array -> [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected output -> [15, -22, 47]   */

let test = [NaN, 0, 15, false, -22, "", undefined, 47, null];


function tr(data){
let ans = []
for(let x of data){
if(x){
ans.push(x)
}
}
return ans;
}

console.log(tr(test));