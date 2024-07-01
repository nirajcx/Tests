/*  5. person = [
  { name: "Ram", age: 17, bdate: "12/06/2005", city: "Pune" },
  { name: "Shyam", age: 17, bdate: "17/01/2024", city: "Delhi" },
  { name: "Mohan", age: 30, bdate: "23/10/1998", city: "Mumbai" },
  { name: "Shyam", age: 15, bdate: "29/04/1985", city: "Kolkata" },
];

display only those persons whose birthday is today.
remove all the persons whose are under 18.   */

let person = [
    { name: "Ram", age: 17, bdate: "12/06/2005", city: "Pune" },
    { name: "Shyam", age: 17, bdate: "17/01/2024", city: "Delhi" },
    { name: "Mohan", age: 30, bdate: "23/10/1998", city: "Mumbai" },
    { name: "Shyam", age: 15, bdate: "29/04/1985", city: "Kolkata" },
    { name: "Shyam", age: 15, bdate: "01/07/2001", city: "Kolkata" },
];

function getTodayBirthdays(persons) {
    const today = new Date();
    const todayMonthDay = `${today.getDate()}/${today.getMonth() + 1}`;

    return persons.filter(person => {
        const [day, month] = person.bdate.split('/').slice(0, 2);
        const birthMonthDay = `${parseInt(day)}/${parseInt(month)}`;
        return birthMonthDay === todayMonthDay;
    });
}

function underAge(arr) {
    let ans = arr.filter((data) => data.age >= 18);
    return ans

}


const todayBirthdays = getTodayBirthdays(person);
console.log(todayBirthdays);

const under18 = underAge(person);
console.log(under18);