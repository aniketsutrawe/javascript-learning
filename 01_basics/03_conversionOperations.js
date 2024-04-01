let score = '33abc'

console.log("type of score variable is " + typeof score);

let valueInNumber = Number(score)
console.log("Type of valueInNumber wich is score variable is converted in number is "+ typeof valueInNumber);

console.log(valueInNumber);
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 =>false
// "" => false
// "Aniket" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);