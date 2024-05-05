/***********`Immediatly Invoked Function Expressions (IIFE)`**********/

function func1() {
  console.log(`func1 executed successfully ✅`)
}
func1()
;(function IIFE1() {
  // Named IIFE
  console.log(`IIFE1 executed successfully ✅`)
})()
;((name) => {
  // Unnamed IIFE
  console.log(`Hi ${name}, IIFE2 Arrow function executed successfully ✅`)
})('Geet')
