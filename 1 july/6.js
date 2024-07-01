/*
6. Show if square of number exists in same array
Test Data: [1,2,625,4,99,5,16,25,17,789,20,6,36,100]

Expected Output: 
number 1 => squared number 1
number 2 => squared number 2
*/

let test = [1, 2, 625, 4, 99, 5, 16, 25, 17, 789, 20, 6, 36, 100];

function sqrTest(arr) {
    for (let key of arr) {
        if (arr.includes(key ** 2)) {
            console.log(`number ${key} squared number ${key ** 2}`);
        }
    }
}

sqrTest(test)