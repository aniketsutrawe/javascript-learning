const accountId = 124554
let accountEmail = "aniketsturawe28@gmail.com"
var accountPassword = "1478523690"
accountCity = "Solapur"         //Possible but not recommended.
let accountState;       //undefined 

// accountId = 3  Not Allowed

accountEmail = "aniket.sutrawe@gmail.com"
accountPassword = "1028128"
accountCity = "Pune"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);