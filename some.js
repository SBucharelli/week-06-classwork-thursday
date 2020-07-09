/**
Implement a some() function which takes an array of items and returns true if any item in the array is true
 */
function some(items) {
    let result = false
    for (let i = 0; i < items.length; i++) {
        if (items.includes(true)) {
            result = true
        }
        return result
    }
}




const result1 = some([false, false, false, false])
const array1 = [false, false, false, false]

/*
 Learn something new!

 `console.assert(condition, message)`

 https://developer.mozilla.org/en-US/docs/Web/API/console/assert
*/
console.assert(result1 === false, "Expected false")

const result2 = some([false, false, false, true])
const array2 = [false, false, false, true]

console.assert(result2 === true, "Expected true")

console.log(some(array1))
console.log(some(array2))