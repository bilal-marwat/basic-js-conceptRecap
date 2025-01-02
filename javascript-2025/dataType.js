// Data Type in JavaScript]
// 1. What are Data Types in JavaScript?

// Data types woh categories hain jinme aap JavaScript mein variables ko rakhte hain. JavaScript mein do main types hote hain:

// Primitive Data Types (Simple data types)
// Non-Primitive Data Types (Complex data types)

// 2. Primitive Data Types
// Yeh data types basic hote hain aur immutable (unchangeable) hote hain. JavaScript mein 7 primitive data types hain:

// Number:

// Integer ya floating-point numbers.
// Example: let num = 42;
//  let pi = 3.14;


// String:

// Textual data, enclosed in single, double, or backticks (template literals).
// Example: let name = "Ali";, let greeting = 'Hello';


// Boolean:

// True or false values.
// Example: let isJavaScriptFun = true;


// Undefined:

// Default value of a variable that has been declared but not assigned.
// Example: let a; // undefined


// Null:

// Represents an intentional absence of any value.
// Example: let b = null;


// Symbol (ES6):

// Unique and immutable data type used for object property keys.
// Example: let sym = Symbol('description');


// BigInt (ES11):

// Used for representing large integers.
//  let bigNum = 1234567890123456789012345678901234567890n;



// let num = 20;
// console.log(typeof num);


// let stringA = "Ali";
// console.log(typeof stringA);


// let booleanA = true;
// console.log(typeof booleanA);


// let undeFined = undefined;
// console.log(typeof undeFined);

// let nullA = null;
// console.log(typeof nullA);

// let symbolA = Symbol("description");
// console.log(typeof symbolA);

// let bigIntA = 1234567890123456789012345678901234567890n;
// console.log(typeof bigIntA);


// ==============================NUMBER data Type=====================
// Jab ek variable koi number store kare, woh "number" type ka hota hai.


let age = 25; // Yeh ek number hai
let pi = 3.14; // Decimal (floating-point number) bhi number type hai
console.log(typeof age); // Output: "number"


// let x  = 20;
// console.log(typeof x);




//====================================String========================

//Jab ek variable text ya alphabets store kare, woh "string" hota hai.


// let name = "Ali"; // Single or double quotes mein likha text
// let greeting = 'Hello, World!';
// console.log(typeof name); // Output: "string"





//============================================Boolean=======================

// Sirf do values hoti hain: true ya false. Mostly conditions mein use hota hai.

let isStudent = true; // True/False value
let hasJob = false;
console.log(typeof isStudent); // Output: "boolean"




//===================================================Undefined===============

// Agar variable declare karein, magar koi value assign na karein, toh woh "undefined" hota hai.

let x; // Declare kiya, value nahi di
console.log(x); // Output: undefined
console.log(typeof x); // Output: "undefined"



//================================================Null======================

// Agar variable mein jaan bujh kar "koi value nahi" deni ho, toh null use hota hai.

let y = null; // Intentional empty value
console.log(y); // Output: null
console.log(typeof y); // Output: "object" (JavaScript quirk)



//===============================================Symbol======================

// Unique aur immutable (change nahi hota) value ke liye use hota hai. Mostly advanced coding mein.

let sym = Symbol("unique");
console.log(typeof sym); // Output: "symbol"


//==============================================BigInt======================

//Bahut bade numbers ko store karne ke liye use hota hai (jo normal number se bhi bade hote hain).

let bigNum = 1234567890123456789012345678901234567890n; // n at the end
console.log(typeof bigNum); // Output: "bigint"



let bilal = "Muhammad Bilal Kha from lakki marwat";
bilal= "Muhammad Awais Qani ";
console.log(bilal);




let v = "Hello"; // x ek primitive value hold karta hai
v[0] = "J"; // Primitive value change nahi hogi (immutable)
console.log(v); // Output: "Hello"

v = "Jello"; // Variable ko nayi value assign ki gayi (mutable)
console.log(v); // Output: "Jello"



//Mutable and Immutable

//Exampe of immutable

// Ek Simple Misal se Samajhte Hain:
// Socho aap ke paas ek diary hai, jisme likha hai:

// "I love coding."

// Agar aap diary ke andar ek shabd ya letter ko change karne ki koshish karein (e.g., "coding" ko "music" mein badalna), to diary ke andar direct editing allowed nahi hai.
// Magar aap ek nayi diary likh sakte hain, jo purani diary se alag hogi. Nayi diary mein ab aapka message hoga:
// "I love music."

// Yeh hi hota hai strings ke saath. Purani value ko modify karna possible nahi hai, magar aap nayi value assign kar ke pura string replace kar sakte hain.


let hu = "Muhammad Bilal"
//hu[1] = "A" // yaha per hum aik letter ko change kar rahy hai liken nhii hu raha hai agar pori string ko change kary tu huga
hu = "Muhammad Awais Qarni"
console.log(hu);



// Yeh 'Memory Copy' Ka Matlab?
// Jab aap ek nayi string assign karte ho, JavaScript purani value ko memory mein same rehnay deti hai aur naye variable ke liye ek nayi copy banati hai.

let a = "Hello"; // Memory mein ek copy bani
let b = a;       // b bhi wahi "Hello" point kar raha hai
a = "Hi";        // ab a ke liye ek nayi memory copy bani
console.log(a); // Output: "Hi"
console.log(b); // Output: "Hello"

// Purani string ("Hello") alag memory mein safe hai.
// Nayi string ("Hi") alag memory mein bani hai.


// Final Clarity:
// String ke characters ko directly change nahi kar sakte.
// Variable ke andar nayi string assign karna possible hai.
// Nayi string ke liye ek nayi copy memory mein banti hai.



// ===================== IMMUTABLE TEST==============================
console.log("==========================================QUESTION SEASSION========================");


//QUESTION 1


let city = "Lahore";
 city[0] = "K";// es ka output huga hamray pass lahore q k hum aik letter ko change kary rahy hai our yee change nhii huga q k string immutable
console.log(city);



//Question 2:

let country = "Pakistan"; 
country = "India";// yaha print huga india q k hum nai pakistan ko replace kya india sy our ye possible hahi hum variable ko nayee vlaue assign ka skty hai
console.log(country);



//Question 3 

const food = "Pizza";
//food = "Burger"; // yaha per variable const hai food jis ka pehla value hai pizza bad mai hum try kar rahy esko change karny k liyee pizza sy burger but yee nhii hua q k const variable change nhii huta 
console.log(food);




//Question 4

let greeting = "Hello"; // es code mai error ko hum let k varable ko declare kya liken bad mai doobara es ko re-decalre krty hai our yee poosible nhii let our const k sath var k sath possible hai re-decalre
greeting = greeting + ", World!";
console.log(greeting);




//Question 5
let animal = "Cat";
console.log(animal[1]); // yaha print huga jo 1 index per hai wo hai a print huga result mai


