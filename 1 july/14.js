/*   14. Write a JavaScript program that accepts a string as input and swaps the case of each character.
String -> 'Javascript IS nOt ReLated TO JAva.'
Expected output -> 'jAVASCRIPT is NoT rElATED to jaVA.'  */

let str = 'Javascript IS nOt ReLated TO JAva.';
function swap(data){
let ans=[];
let arr= data.split("");
for(let x of arr){
if(x==x.toUpperCase()){
ans.push(x.toLowerCase());
} else if(x==x.toLowerCase()){
ans.push(x.toUpperCase())
}
}
return ans.join("");
}

console.log(swap(str));