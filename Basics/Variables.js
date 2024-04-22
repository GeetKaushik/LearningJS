/*
 * NOTE: Read `https://medium.com/@codingsam/awesome-javascript-no-more-var-working-title-9994289999941
 * For more comprehensive documentation
 */

const accountId = 112233 // To declare constants
let accountPassword = '123' // To declare variables
/*
  * `var` previously used to declare variables in JS but lack block scope resolution (i.e `{}`)like `let` which replaced `var` as new way to declare variables
  * `const` also has block scope resolution like `let`
  var accountEmail = 'geet@123.com'
*/
let accountState // value will be undefined
accountCity = 'Delhi' // Not recommended but it will run but typeof variable is `any` to start with which is not recommended to use

// Changing values
// accountId = 1111 --> Throws an error
accountEmail = 'geetu@456.com'
accountPassword = '456'
accountCity = 'Faridabad'

console.log(accountEmail, accountPassword, accountCity) // console logs the output in line
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]) // console logs the output in tablular format

// type of all variables
console.log('Type of all variables')
console.table([
  typeof accountId,
  typeof accountEmail,
  typeof accountPassword,
  typeof accountCity,
  accountState,
]) // console logs the output in tablular format
