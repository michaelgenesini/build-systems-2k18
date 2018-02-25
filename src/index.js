import './main.sass'

(() => {
    const DATA = {
        firstName: 'Parrot',
        lastName: 'Party'
    }
    let {firstName, lastName} = DATA
    console.log(`Hello ${firstName} ${lastName}!`)
})()