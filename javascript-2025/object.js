// TOPIC NAME
// OBJECTS IN JAVASCRIPT


//INTRODUCTION
// JavaScript mein, object ek collection hota hai key-value pairs ka. Key ko property kehte hain aur value kisi bhi data type ki ho sakti hai (primitive ya non-primitive).


//Object ko banane ke do main tareeqay hain:

// 1 Object Literal (Recommended Way):

const person = {
    name: "Ahmed",
    age: 25,
    city: "Lahore"
};

console.log(person); // Output: { name: 'Ahmed', age: 25, city: 'Lahore' }




// Using new Object() (Less Common):

const person2 = new Object();
person2.name = "Ahmed";
person2.age = 25;
person2.city = "Lahore";
person2.country = "Pakistan";

console.log(person2); // Output: { name: 'Ahmed', age: 25 }



//object ko hum 2 tariqoo sy access kar skty hai 

// 1. Dot Notation
// Dot notation tab use hoti hai jab aapko property ka naam (key) pehle se pata ho aur wo valid JavaScript identifier ho.
// Key ka naam space, special characters, ya number se shuru hota ho, to dot notation kaam nahi karegi.



// 2. Bracket Notation



const dotNotaion = {
    name : "Muhammad Bilal",
    age: 22,
    address: "dara pezu distric lakki marwat",
    education: "Fsc 12th",
    country : "pakistan",
}


// ab es user ka name access karengy using .Dot notaion

//console.log(dotNotaion.name); // Output: Muhammad Bilal 
// ab es ka age acess karengy using .Dot notaion
console.log(dotNotaion.age); // Output: 22


// this calles .Dot notation access 


// NOw using bracket notation access value for  object

const bracketNotation = {
    name : "Dr Muhammad Awais Qarni",
    age: 20,
    address: "Dera isamil khan of pakistan",
    education: "Toper Of Fsc",
}

bracketNotation.name = ["Muhammad Haris"];
// now using age access for object using bracket notation

//console.log(bracketNotation["age"]); // Output: 20

console.log(bracketNotation["name"]); // Output: Dr Muhammad Awais Qarni





//bracket notaion use example

const user = {
    "full name" : "Muhammad Bilal web developer",
    "age" : 22,
    "address" : "Dera isamil khan of pakistan",
    "education" : "Fsc 12th",
    "country" : "pakistan",
}

console.log(user["full name"]); // Output: Muhammad Bilal




// static oject exmaple
// es ko hum bracket notiaon sy b accsess kar skty hai 
// our .dot notaion sy b access kar skty hain
const user2 = {
    persoName : "Muhammad Anwar",
    age : 22,
    address : "Dera isamil khan of pakistan",
    education : "Fsc 12th",
    country : "Mine Anwar from mian wali",
}

console.log(user2["persoName"]); // Output: Muhammad Anwar hum nai object name ko access kya hain bracket notation sy
console.log(user2.country); // Output: Mine Anwar from mian wali hum nai object name ko access kya hain .dot notation sy




// dynamic object example
const keyName = "name";
const student = {
    name: "Bilal",
    age: 22
};

console.log(student[keyName]); // Output: Bilal






