console.log("Hello World")

//data types
//var isDeveloper = true //this is a bad practice and it's not recommended
let firstname = 'Said'
let lastname = 'Valencia Castrillo'
let isDeveloper = true
let age = 28
let height = 1.75
const PI = Math.PI

// the string is immutable, the method returns a new string
let firstname_uppercase = firstname.toUpperCase()
console.log(firstname_uppercase)

// lists
const list = []
//list.push(1) // this mutates the list
const new_list = list.concat(1,2,3,4) // this does not mutate the list but returns a new list
console.log(new_list)

new_list.forEach((element , index)=> {
    console.log(` value : ${element } in index : ${index}`)
})
// objects
const person = {
    username : 'Said',
    twitter : '@said_codes',
    age : 27,
    isDeveloper : true,
    links: ['https://twitter.com/said_codes','https://github.com/said-codes']
}

console.log(person.username)
console.log(person.links[0])
const field = "twitter"
console.log(person[field])

// functions

// function expression
const sum = (a,b) => {
    return a + b
}

// function declaration
function subtraction(a, b){
    return a -b
}

console.log(sum(9,8))
