// Switch function similar to if-else but checks cases instead of checking conditions
let value = 'value1'
switch (
  value // value of the case
) {
  case 'value1':
    // If case is true then enter this scope and runs all cases below it
    break // this is needed to break out of the switch
  case 'value2':
    // If case is true then enter this scope
    break
  default:
    // If none of the cases are true then enter this scope
    break
}
// Example:
let rank = 'S'
switch (rank) {
  case 'S':
    console.log('Your mana is above 1000')
    break
  case 'A':
    console.log('Your mana is above 500')
    break
  case 'B':
    console.log('Your mana is above 300')
    break // Multiple doesn't throw errors since it already exists the switch
    break // Never reached this break
  case 'C':
    console.log('Your mana is above 100')
    break
  default:
    console.log('Are you a hunter?')
  //break keyword is optional in default case since it doesnt affect the code much
}
