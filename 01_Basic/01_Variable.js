const accountId = 144543535;
let accountEmail = "prabhat@gmail.com";
var accountPassword = "12345";
 accountCity = "Bangalore";
// accountId = 123456789; // This will throw an error because accountId is a constant
let accountState; // This variable is declared but not initialized, so it will have the value undefined2

accountEmail = "ysh@gmail.com";
accountPassword = "67890";
accountCity = "Mumbai";

console.log(accountId);
/*prefer not to use var because of issue in block scope and functionl scope. It can lead to unexpected behavior and bugs in larger codebases. Using let and const helps to avoid these issues and makes the code more predictable and easier to debug.
*/
console.table({ accountEmail, accountPassword, accountCity, accountState });
