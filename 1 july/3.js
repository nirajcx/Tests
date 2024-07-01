/* 3. Write a function called vowelCount which accepts a string and returns a Map where the keys are vowel and the values are the count of the vowels in the string.
Test data: Colt
Expected output: Map { 'o' => 1 }  */

function vowelCount(str) {
    str = str.toLowerCase();
    let ans = new Map();
    let even = [];
    for (let key of str) {
        if (key == "a" || key == "e" || key == "i" || key == "o" || key == "u") {
            even.push(key)
        }
    }

    for (let key of even) {
        if (ans.has(key)) {
            ans.set(key, ans.get(key) + 1);
        } else {
            ans.set(key, 1)
        }
    }
    return ans;

}

console.log(vowelCount("Coltaa"));