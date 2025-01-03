// TOPIC NAME
// OBJECTS IN JAVASCRIPT


// 2 Two declare object in javascript
// jab hum object ko constructor sy banaty hain to humain new keyword use karna parta hai. our singleton bantaa hain
// our jab leteral sy declare karty tu singleton nahi bantaa.

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


// this called .Dot notation access 


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



// IMPORTANT POINTS FOR INTERVIEW PERSPECTIVE
// 1 acces object using .dot notation
// 2 access object using bracket notation

let sym1 = Symbol("name"); // ab hum es symbol ko object ke key ke tor per use kar skty hain
let obj = {
    name : "Bilal",
    "full name" : "Muhammad Bilal web developer", // ab es ko access karne ke liye bracket notation use karna hoga beacuse yee space ke sath hain. 
    [sym1] : "hello i am symbol", // agar es symbol ko hum as key tour per use krengy tu square bracket notation use karna hoga
    age : 22,
    address : "Dera isamil khan of pakistan",
    education : "Fsc 12th",
    country : "pakistan",
}

console.log(obj.name); // Output: Muhammad Bilal
console.log(obj["names"]); // Output:  // output: undefined beacuse behind the scene yee age string ke tarhaa rakhaa jata hain. so yee error aayega.
console.log(obj["full name"]); // Output: Muhammad Bilal web developer

//console.log(typeof obj.sym1); //  jab hum eska data type check krengy tu yee string hoga. ab yee symbol ke tor per nahi hain.  

console.log(obj[sym1]); // Output: hello i am symbol // ab yee symbol ke tor per access huaa hain.

// our jab es symbol ko access karna hoga tu hum square bracket notation use karengy

// jab .Dot sy access krengy tu string ke tarhaa es ko access karnee ke zarorat nhi hain


//================================================================================================


let obj2 = {
    name : "Faisal Khan",
    email: "mFjwA@example.com",
    age : 22,
    address : "Dera isamil khan of pakistan",
    education : "Fsc 12th",
    country : "pakistan",
}

// change email address 
// obj2.email = "bilal@example.com";
console.log(obj2.email);

// agar aap chaty hain  k koi b value ko change nhii karu tu eskoo freez kaary hain
// Object.freeze(obj2);
obj2.email = "bilal@example.com";
console.log(obj2.email);
console.log(obj2);

// ab es object mai function ko add krengy
obj2.sayHello = function(){
    console.log("Hello i am fine")
    return "Done";
}
console.log(obj2.sayHello); // Output: Hello i am fine


