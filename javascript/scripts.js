
// Install NodeJS so you can run your JS from Code

// Explain this concepts in Javascript
// 1. Variables/Constant/Arrays  - Named storage location
// 1b.Datatypes
// 2. Operators - +, -. /, *, %
// 3. Equalities - <, >, <=, >=, ===
// 4. Conditions - if, else, elseif
// 5. Loops - Repeat things intelligently (start, end condition, increment) e.g (i=0 , i<100; i=i+1)


// 6. Functions areaOfTringle(67, 89)
// 7. Classes - 



// Datatypes - number, strings, object, 
// Constants - const



let base = 45
let height = 25
let sum = base + height
const half = 0.5
let greeting = "GOOD MORNING"
let username = "ADEBOLA"
let greetuser = greeting + "," + username
let people = ["bola", "sola", ["seyi", "felix"]]
console.log(people[2][1])
console.log(greetuser)
console.log(sum)
console.log(base, height)



//Exercise 1: check whether a number is even or odd
let numbers = 89
if((numbers % 2) === 0){
    console.log("Number is even")
}else{
    console.log("Number is odd")
}


//Exercise 2: Find the largest
let a = 23
let aa = "23"
let aaa = true
let aaaa = ["a","b"] //object - array
let listexample = {0:"a","name":"b"}
listexample["name"]
let person = {
    "firstname": "Adebola",
    "lastname": "Oyenuga",
    "matric":"02121322",
    "class":"JSS 2B"
}
console.log(person["firstname"])

let b = 54
let c = 2

if(a > b && a > c){
    console.log("A is the greatest")
}else if(b > c){
    console.log("B is the greatest")
}else{
    console.log("C is the greatest")
} 

//Exercise 3: Say hello 10 times
for(let count = 0; count <= 30; count = count+1){
    console.log("Hello world"+count)
}

//Functions Examples

function eat(){
    console.log("Go to dinning")
    console.log("Serve Yourself")
    console.log("Start Eating")
}

function eatthis(food, appetizer="mango juice" ){
    console.log("Go to dinning")
    console.log("Serve Yourself "+ appetizer)
    console.log("Start Eating "+appetizer)
    console.log("Serve Yourself "+ food)
    console.log("Start Eating "+food)
}


function eatthiswithmessage(food, appetizer="mango juice" ){
    console.log("Go to dinning")
    console.log("Serve Yourself "+ appetizer)
    console.log("Start Eating "+appetizer)
    console.log("Serve Yourself "+ food)
    console.log("Start Eating "+food)
    return "I am full"
}

eat()

eat()

eat()

eatthis("rice")

eatthis("rice", "pineapples")

let response = eatthiswithmessage("beans", "melons")

console.log("The user said, " + response)


// Exercise - Phonebook
let phonebook = [
    {
        "firstname": "Adebola",
        "lastname": "Oyenuga",
        "phone":"07066315488",
    },
    {
        "firstname": "Abdul-Lateef",
        "lastname": "Jaji",
        "phone":"0803121212",
    },
] // Array that take in list of people

console.log(phonebook[0].firstname)
console.log(phonebook[0].phone)
console.log(phonebook[1].firstname)