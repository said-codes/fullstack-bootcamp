// Variables
// var is a global variable, it's mutable
// let is a local variable, it's mutable
// const is a local variable, it's immutable

const PI = Math.PI
//PI = 3.14 // this will throw an error because the constant PI is not mutable

let firstname = 3
// Typing is weak and dynamic
firstname = 'Said'
// Primitive types are immutable
let lastname = 'Valencia Castrillo'
let isDeveloper = true
let age = 28
let height = 1.75
let weight = null
let address = undefined

// the string is immutable, the method returns a new string
firstname.toUpperCase()
console.log(firstname) // Said is printed, because the strings are inmutable
let firstname_uppercase = firstname.toUpperCase()


// Arrays
// arrays are mutable, they can grow or shrink
const t = [1, -1, 3]
t.push(5)
// that it is constant means that the value cannot be reassigned not that it cannot be changed
console.log(t.length) // 4 is printed
console.log(t[0])     // -1 is printed


// concat method
const list = []

const new_list = list.concat(1, 2, 3, 4) // this does not mutate the list but returns a new list
console.log(new_list)

// forEach
t.forEach(value => {
    console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
})

new_list.forEach((element, index) => {
    console.log(` value : ${element} in index : ${index}`)
})

// Objects
const person = {
    username: 'Said',
    twitter: '@said_codes',
    age: 27,
    languages: {
        backend: ["Java", "Python", "JavaScript"],
        frontend: ["HTML", "CSS", "JavaScript"]
    },
    isDeveloper: true,
    links: ['https://twitter.com/said_codes', 'https://github.com/said-codes']
}

console.log(person["username"])
console.log(person.links[0])

const field = "twitter"
console.log(person[field])

// Functions

// function expression
const sum = (a, b) => {
    return a + b
}

let result = sum(8, 9)
console.log(result)

// function declaration
function product(a, b) {
    return a * b
}

let product_result = product(90, 57)

const average = function (a, b) {
    return (a + b) / 2
}

let average_result = average(10, 45)
console.log(average_result)


const list_of_numbers = [2, 4, 8, 9, 14]
// map method
const list_squared = list_of_numbers.map(number => number * number)

console.log(list_squared)

const numbers = [1, 2, 3]


const m1 = numbers.map(value => value * 2)
console.log(m1)   // [2, 4, 6] is printed


const m2 = numbers.map(value => '<li>' + value + '</li>')
console.log(m2)
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed

const n = [1, 2, 3, 4, 5]

// Destructuring assignment
const [first, second, ...rest] = n

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4, 5] is printed

// Object methods and This
const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function () {
        console.log('hello, my name is ' + this.name)
    },
    doAddition: function (a, b) {
        console.log(a + b)
    }
}

arto.growOlder = function () {
    this.age += 1
}

console.log(arto.age)   // 35 is printed
arto.growOlder()
console.log(arto.age)   // 36 is printed
arto.doAddition(9, 21) // 30 is printed

const reference_to_addition = arto.doAddition
reference_to_addition(40, 24) // 64 is printed

arto.greet() // hello, my name is Arto Hellas
const reference_to_greet = arto.greet
reference_to_greet() // hello, my name is undefined

setTimeout(arto.greet, 1000) // hello, my name is undefined
setTimeout(arto.greet.bind(arto), 1000) // hello, my name is Arto Hellass

// In the top level of the browser this = window
// In the top level of the node REPL this = global
// In the top level of a module in node this = module.exports

// This is the arrow functions, works  different
// because the arrow functions doesn't have their own this
// so the this is the same as the this of the parent function

const myObject = {
    myArrowFunction: null,
    myMethod: function () {
        this.myArrowFunction = () => { console.log(this) }
    }
}

myObject.myMethod()
myObject.myArrowFunction()

// Classes
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log('hello, my name is  ' + this.name)
    }
}

const person1 = new Person('Arto Hellas', 27)
const person2 = new Person('Said', 28)
person1.greet()
person2.greet()


