// Object Destructing in javascript 

// Imagine karo ke tumhare paas ek gift box (object) hai jisme different items hain.
// Tum chaho toh saara box (object) utha sakte ho, ya tum us box ke andar ke items ko alag-alag directly variables mein rakh sakte ho.
// Yehi kaam object destructuring karta hai.



//Example Without Destructuring:

let user = {
    name: "Ali",
    age: 25,
    city: "Lahore"
};

// Properties ko access karte hain
let userName = user.name;
let userAge = user.age;
let userCity = user.city;

console.log(userName); // Output: Ali
console.log(userAge);  // Output: 25
console.log(userCity); // Output: Lahore



// With Destructuring:

// Object destructuring se yeh kaam bohot easy ho jata hai:
console.log("Example of Object Destructuring");

let userDestruct = {
    name: "Ali",
    age: 25,
    city: "Lahore"
};

// Destructuring karte hain
let { name, age, city } = userDestruct;

console.log(name); // Output: Ali
console.log(age);  // Output: 25
console.log(city); // Output: Lahore
