//variables
const x = 1
let y = 5

console.log(x, y)   // se imprime 1, 5
y += 10
console.log(x, y)   // se imprime 1, 15
y = 'sometext'
console.log(x, y)   // se imprime 1, sometext
x = 4               // provoca un error

//arrays
const t = [1, -1, 3]

t.push(5)

console.log(t.length) // se imprime 4
console.log(t[1])     // se imprime -1

//foreach
t.forEach(value => {
  console.log(value)  // se imprimen los números 1, -1, 3, 5 cada uno en su propia línea
})

//concat
const t2 = t.concat(5) // crea un nuevo array

console.log(t)  // se imprime [1, -1, 3]
console.log(t2) // se imprime [1, -1, 3, 5]


//map
const m1 = t.map(value => value * 2)
console.log(m1) // se imprime [2, -2, 9,]

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)
// se imprime [ '<li>1</li>', '<li>-1</li>', '<li>3</li>','<li>5</li>' ]


const [first, second, ...rest] = t

console.log(first, second)  // se imprime 1, -1
console.log(rest)          // se imprime [3,5]


//objects
const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
  }

  const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
  }

  const object3 = {
    name: {
      first: 'Dan',
      last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
  }


console.log(object1.name)         // se imprime Arto Hellas
const fieldName = 'age'
console.log(object1[fieldName])    // se imprime 35


object1.address = 'Helsinki'
object1['secret number'] = 12341

//functions

//arrow function
const sum = (p1, p2) => {
    console.log (p1)
    console.log (p2)
    return p1 + p2
}
const result = sum(1, 5)
console.log (result)

/*
const square = p => {
    console.log(p)
    return p * p
}
*/

const square = p => p * p

const t3 = [1, 2, 3]
const tSquared = t3.map(p => p * p)
// tSquared ahora es [1, 4, 9]

//declartion function
function product(a, b) {
    return a * b
  }

const result2 = product(2, 6)
// result ahora es 12


//expression function
const average = function(a, b) {
    return (a + b) / 2
  }

const result3 = average(2, 5)
// result ahora es 3.5


//this
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },

  doAddition: function(a, b) {
    console.log(a + b)
  },
}

arto.doAddition(1, 4)        // se imprime 5

const referenceToAddition = arto.doAddition
referenceToAddition(10, 15)   // se imprime 25


arto.greet()       // se imprime "hello, my name is Arto Hellas"

const referenceToGreet = arto.greet
referenceToGreet() // se imprime "hello, my name is undefined"


setTimeout(arto.greet, 1000)
// se imprime "hello, my name is undefined" después de 1 segundo

setTimeout(arto.greet.bind(arto), 1000)
// se imprime "hello, my name is Arto Hellas" después de 1 segundo

//classes
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log('hello, my name is ' + this.name)
  }
}

const adam = new Person('Adam Ondra', 29)
adam.greet()

const janja = new Person('Janja Garnbret', 23)
janja.greet()
