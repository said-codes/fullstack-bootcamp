let firstname = 'Said'
const lastname = 'Valencia Castrillo'
let isDeveloper = true
let upperCaseName = firstname.toUpperCase()

const list = []
//list.push(1)
const newList = list.concat(1)

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

const addition = (a,b) => {
    console.log(a)
    console.log(b)
    return a + b
}

function subtraction(a, b){
    return a -b
}

