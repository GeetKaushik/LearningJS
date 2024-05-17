/* 
  !READ: 
  * type, timestamp, defaultPrevented
  * target, toElement, scElement, currentTarget,
  * client, clienty, screent, screeny
  * altkey, ctrlkey, shiftkey, keycodes 
*/

// document.getElementById('Quote1').onclick = () => {
//   alert('Quote1 clicked')
// } // Not Optimized

// document.getElementById('Quote1').addEventListener(
//   'click',
//   (e) => {
//     console.log(e)
//   },
//   false
// )
// document.getElementById('Quote2').addEventListener('dblclick', () => {
//   alert('Quote2 clicked twice')
// })

// Event Propagations

// Event Bubbling - In Event Bubbling propagation goes from lowest to highest element level
// document.getElementById('gallery').addEventListener(
//   'click',
//   () => {
//     console.log('Image inside gallery clicked')
//   },
//   false /** default: false */
// ) // This is higher
// document.getElementById('Quote1').addEventListener(
//   'click',
//   (e) => {
//     console.log('Quote1 clicked')
//     e.stopPropagation() // This stops event propagation
//   },
//   false /** default: false */
// ) // This is lower

// Event Capturing - In Event Bubbling propagation goes from highest to lowest element level
// document.getElementById('gallery').addEventListener(
//   'click',
//   () => {
//     console.log('Image inside gallery clicked')
//   },
//   true /** default: false */
// ) // This is higher
// document.getElementById('Quote2').addEventListener(
//   'click',
//   () => {
//     console.log('Quote2 clicked')
//   },
//   true /** default: false */
// ) // This is lower

document.getElementById('link').addEventListener('click', (e) => {
  e.preventDefault()
  console.log('Link clicked')
  console.log(e.defaultPrevented)
})

document.querySelector('#Quotes').addEventListener('click', (e) => {
  console.log(e.target.tagName)
  if (e.target.tagName === 'IMG') {
    console.log(e.target.id)
    e.target.parentNode.remove() // newer method
  } // safety check so that the whole list is not removed due to misclick
  // let target = e.target.parentNode
  // target.parentNode.removeChild(target) // Older method
})
