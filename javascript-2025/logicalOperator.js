// javascript logival operator 

// ======== ========================================================== 1  AND (&&)

//Dono conditions true honi chahiye.

// Iska matlab hota hai "aur".

// Dono conditions sahi (true) honi chahiye, tabhi result true aayega.

// Agar ek bhi condition galat (false) ho, to result false hoga.

// Example:
// "Main park jaunga agar mausam acha ho aur mera kaam khatam ho."

// Mausam acha hai = true

// Kaam khatam hai = true

// Result: Park jaunga = true


//Example 1

// let person = "Bilal";
// let personAge = 22;
// console.log(person == "Bilal" && personAge == 22); // Output: true

// //Example 2
// let value1 = 45;
// let value2 = 50;
// console.log(value1 < value2 && value2 > value1); // Output: true




// Example 3  Real Example
let x = prompt("Enter user Name");
let y = prompt("Enter Password");
// now y convert to number
let ystring = Number(y) // yeh jab prompt mai number enter krty hain tu string yaha per hum nai string ko number mai convert kya 
console.log("Congratulation you succesfully login ",x === "Bilal" && ystring === 786786);
console.log(typeof ystring);




// let input = prompt("Enter a number:"); // Yeh hamesha string return karega
// console.log(typeof input)  // Output: string

// let number = Number(input); // String ko number mein convert kar rahe hain
// console.log(typeof number); // "number






// ====================================== 2 OR (||)

//Ek condition bhi true ho to result true hoga.

// es mai agar aik condition b sahii hu gayaa tu hamaray pass result ture huga 

// let number1 = 89;
// let number2 = 100;
// console.log(number1 > number2 || number1 < number2);

// Iska matlab hota hai "ya".
// Agar ek bhi condition sahi (true) ho, to result true hoga.
// Dono conditions galat (false) ho, to result false hoga.
// Example:
// "Main TV dekhunga agar light ho ya laptop charged ho."

// Light hai = false
// Laptop charged hai = true
// Result: TV dekhunga = true




//==================================== 3 NOT (!)
// Iska matlab hota hai "nahin".
// Yeh condition ko ulta kar deta hai. Agar true hai to false, aur agar false hai to true.

// let g = 10;
// let h = 20;
// console.log(!(g < h));




// let input = prompt("Enter a number:");
// let number = Number(input);

// if (!isNaN(number)) {
//     console.log("The number is:", number);
// } else {
//     console.log("Please enter a valid number!");
// }


// let userInput = prompt("Enter your name:");
// if (!userInput) { // Agar userInput empty string hoga (falsy), condition true ho jayegi
//     console.log("You didn't enter your name!");
// } else {
//     console.log("Hello, " + userInput + "!");
// }



