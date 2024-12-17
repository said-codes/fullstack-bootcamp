import {total,multiply,title2,active,points} from './total.js'
import addModule from './total.js'

//functions
function hello(){
    return function(){
        return "Hello World!"
    }
}

const greet = hello()
console.log(greet())

//parameters
function sayHello(name){
    return "Hello " + name
}

console.log(sayHello("John"))
console.log(sayHello("Mary"))

function addition(a,b=0){
   /*if(b === undefined){
        b = 0
    }*/
    return a+b
}
console.log(addition(10))

const user = {
    name: "John",
    lastName: "Doe",
    age: 30,
    address:{
        country: "USA",
        city: "New York",
        street: "Main St",
        building: 5
    }
    ,
    friends: ["Mary", "Peter", "Jane"],
    active: true,
    sendEmail: function(){
        return "Sending email"
    }

}

console.log(user.name)
console.log(user.address.country)
console.log(user.friends[1])
console.log(user.sendEmail())
console.log(user["name"])

const name = 'laptop'
const price = 3000

const newProduct = {
    name,
    price
}

console.log(newProduct)


const title = document.createElement('h1')
title.innerText = "Hello World from js"
document.body.append(title)

const button = document.createElement('button')
button.innerText = "Click me"
button.addEventListener('click', function(){
    title.innerText = "Changed from js"
    alert("Clicked!")
})
document.body.append(button)


function printInfo( {name}){
    return `<h1>Hi ${name}</h1>`
}

document.body.innerHTML = printInfo(user)


// anonymous functions
const button2 = document.createElement('button')
button2.innerText = "Click me 2"
const background = 'blue'
const color = 'white'
const result = `background: ${background}; color: ${color};`
button2.style  =  `${result}`
button2.addEventListener('click', function(){
    alert("Clicked 2!")
})

document.body.append(button2)


// arrow functions
function add(a, b){
    return a + b
}

const addArrow = (a, b) => {
    return a + b
}

// inline arrow functions
const addArrow2 = (a, b) => a + b

const showObject = () => ({name: 'Said', age: 30})

const isAuthorized = true
button2.style  =  `background:${isAuthorized ? 'blue': 'red'}; color:white`
button2.addEventListener('click', () => {
    if(isAuthorized){
        return alert("it is authorized")
    }
    alert('it is not authorized')

})


//arrays
const names = ['John', 'Mary', 'Peter', 'Jane']
const otherNames = ['Mark', 'Paul', 'George']
/*
for(let i = 0; i < names.length; i++){
    console.log(names[i])
}*/
names.forEach(function(name){
    console.log(name)
})

const newNames = names.map(function(name){
    return `Hello ${name}`
})
console.log(newNames)

const nameFound = names.find(function(name){
    return name === 'Mary'
})

console.log(nameFound)

const filteredNames = names.filter(function(name){
    return name !== 'Mary'
})
console.log(filteredNames)

const anotherNames = names.concat(otherNames)
console.log(anotherNames)

// spread operator
const newNames2 = [...names, ...otherNames]
console.log(newNames2)

const user2 = {
    name: 'Said',
    age: 29
}

const address = {
    country: 'USA',
    city: 'New York'
}

const userInfo = {
    ...user2,
    ...address
}
console.log(user2)
console.log(address)
console.log(userInfo)

//module
console.log(total(10, 20))
console.log(multiply(10, 20))
console.log(title2)
console.log(active)
console.log(points)
console.log(addModule)


const person = {
    name: 'Said',
    age: 29,
    address: {
        country: 'USA',
        city: 'New York'
    },
    friends: ['Mary', 'Peter', 'Jane']
    , location : {}
}

//optional chaining
console.log(person?.address?.country)


//promises
const ul = document.createElement('ul')

fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    data.forEach(function(post){
        const li = document.createElement('li')
        li.innerText = post.title
        ul.append(li)
    })
    document.body.append(ul)
})
console.log('next line')

//async await
async function loadData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data)
}

loadData()




