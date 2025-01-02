// shortCircuting in javascript


// falsey value

// 1 false
// 2 0
// 3 "" (empty string)
// 4 null
// 5 undefined

// truthy value

// with our falsey value anything will be true
// 1 true
// 2 any number
// 3 any string
// 4 any object
// 5 any array

//=================================================================Logical Operators ka Short-Circuiting:

// AND Operator (&&):


// Short-Circuiting Rule: Jab left side me pehli value falsey hoti hai, to baaki ka code evaluate hi nahi hota.
//Falsey Values: false, 0, "" (empty string), null, undefined, NaN.


// Example
console.log(false && "Hello");  // Output: false (kyunki left side false hai)
console.log(0 && 42);          // Output: 0 (kyunki 0 falsey hai)
console.log("World" && 123);   // Output: 123 (kyunki "World" truthy hai)
console.log("" && 456);        // Output: "" (kyunki empty string falsey hai)
console.log(null && 789);      // Output: null (kyunki null falsey hai)
console.log(undefined && 101); // Output: undefined (kyunki undefined falsey hai)
console.log(NaN && 111);       // Output: NaN (kyunki NaN falsey hai)
console.log("Hello" && 222);   // Output: 222 (kyunki "Hello" truthy hai)

let num1 = 1;
let num2 = 897;
let result = num1 && num2;
console.log("Apkaaa result kya hain muhji batauoooo",result);

let value1 = 1;
let value2 = 42;

if(value1 && value2){
    console.log("Both values are truthy");
}else{
    console.log("At least one value is falsey");
}

//================= Explanation
// Explanation: Agar left side truthy hai, tabhi right side evaluate hoti hai. Agar left side falsey hai, to wahi return hoti hai.




//  ================================================== OR Operator (||):
//       =====================================

// R Operator (||):

// Short-Circuiting Rule: Jab left side me pehli value truthy hoti hai, to baaki ka code evaluate hi nahi hota.
// Truthy Values: Har wo value jo falsey nahi hai, jaise true, numbers other than 0, non-empty strings, objects, etc.
console.log("===================================== OR Operator (||)");

// example
console.log(true || "Hello");  // Output: true (kyunki left side truthy hai)

console.log(false || "Hello Bilal"); // yahar per jab code run huga tu first side mai false hain tu code aag jayee tu es k baad hello bilal print hoga q k true hain


console.log(false || "" || null || undefined|| 0 || NaN || 786786 ||"Hello world i am also true");

// yaha per jab hum code run krengy tu pehly falsey hain es k baad number hain 78786 print q k es ko true mil gaya aagay nhii jayee ga code halanky aagay b our ture value hain islliyee nhiii jayeee k es ko at least aik true value chaiyee




// ===========================Quick Recap:
// && (AND): Left pe falsey mila, to wahi return hota hai. Agar left truthy hai, to right return hoga.
// || (OR): Left pe truthy mila, to wahi return hota hai. Agar left falsey hai, to right return hoga.
// Non-Boolean values ko logical operators evaluate karte waqt Boolean ke tarah treat karte hain, lekin actual return value unki original hoti hai.



console.log(42 && "JavaScript");      // Output kya hoga?
console.log(null || "Frontend");      // Output kya hoga?
console.log(undefined && 0);          // Output kya hoga?
console.log(123 || null || "React");  // Output kya hoga?
console.log("" || 0 || false || 99);  // Output kya hoga?

