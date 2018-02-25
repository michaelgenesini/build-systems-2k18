// Import a couple modules for testing.
import { sayHelloTo } from './modules/mod1'
import addArray from './modules/mod2'

const DATA = {
    firstName: 'Parrot',
    lastName: 'Party'
}
let {firstName, lastName} = DATA
console.log(`Hello ${firstName} ${lastName}!`)

// Run some functions from our imported modules.
const result1 = sayHelloTo('Party Parrot')
const result2 = addArray([1, 2, 3, 4])

// Print the results on the page.
const printTarget = document.getElementById('test')

printTarget.innerText = `sayHelloTo('Party') => ${result1}\n\n`
printTarget.innerText += `addArray([1, 2, 3, 4]) => ${result2}`
