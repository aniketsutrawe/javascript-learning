

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non Primitive)

// Stack : String, Number, Boolean, null, undefined, Symbol, bigInt

let stringIs = "This is an String."

let numberIs = 23; //this is number.

// true = 1  / false = 0 //these are boolean

// null // null is not empty there is nothing litrally nothing 

// let score;     //this is undefined space is allocataed to variable but diden't know the value

// Sumbol // is used to uniquely identify the data
// let id1 = Symbol('123')  
// let id2 = Symbol('123') //both values are same but due to symbol they are not same hence they are unique 

// let bigNumber = 55455245662554551148n //using the last 'n' after the value converts the int to bigInt (increases the range of int type)




// Heap : Array, Objects, Functions

let family = ['Pappa', 'Mummy', 'Me']; //This is Array. used to store multiple values
console.log(family);

let objectIs = {
    name : "Aniket",
    age : 23
    //this is object
}

console.log(objectIs.age); //access the object's values using '.' like objectIs.name

function sum() {        //Theis is Function 
    let a = 10
    let b = 20
    let c = a+b
    return c;
}

console.log("the sum of a and b is :" + sum())      //we call function with their name used console.log for printing

let sumOfTwo = function sum() {        //Theis is Function stored in a variable 
    let a = 10
    let b = 20
    let c = a+b
    return c;
}