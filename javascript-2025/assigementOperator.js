// assigement Operator in javaScript

//In JavaScript, assignment operators are used to assign values to variables. The most common assignment operator is the = sign, but there are other shorthand versions that make assigning values more concise.

// 1. = (Simple Assignment Operator)

let a = 10;  //It assigns the right-hand side value to the left-hand side variable.

console.log(a);



// 2. += (Addition Assignment Operator)

let b = 5;
//b = b + 3;  //It adds the right-hand side value to the left-hand side variable and assigns the result to the left-hand side variable.
b += 3; // short hand
console.log(b);


let m = 10;
let n = 9;

//m =  m + 6 + n; // ya labmaa tariqa hai shorthand use krty hain

m += n + 1;
console.log(m);

let g = 10;
let h = 10;
let i = 3;
let j = 5;
let k = 6;
let l = 7;

// j = j + g + h + i + k + l;  

j += g + h + i + k - l;
console.log("kjasfjfkfkjfajkk",j);




// 3. -= (Subtraction Assignment Operator)

//Yeh operator left-hand side wale variable se right-hand side wale value ko minus karne ka kaam karta hai aur result ko fir usi variable mein assign kar deta hai.

let o = 90;
//o = o - 5; // It subtracts the right-hand side value from the left-hand side variable and assigns the result to the left-hand side variable.

o -= 5;
console.log(o);


let q = 25;
let r = 22;
let s = 3;
q -= r + s;
console.log(q);


// 4. *= (Multiplication Assignment Operator)

// Yeh operator left-hand side wale variable ko right-hand side wale value se multiply karta hai aur result ko fir usi variable mein assign kar deta hai.


let t = 10;
t *= 2; // It multiplies the left-hand side variable by the right-hand side value and assigns the result to the left-hand side variable.
// t = t * 5;
console.log(t);


let num1 = 10;
let num2 = 3;
let num3 = 7;
let num4 = 4;
num2 *= num3 + num4 + num1 - num1;   
console.log(num2);




let value1 = 4;
let value2 = 7;
let value3 = 9;
let value4 = 11;
let value5 = 15;
let value6 = 17;
let value7 = 19;

value1 *=  value2 * value3 * value4 + value5 - value6 * value7; 
console.log(value1);


 


// 5. /= (Division Assignment Operator)
// Yeh operator left-hand side wale variable ko right-hand side wale value se divide karta hai aur result ko fir usi variable mein assign kar deta hai.

let bilal = 10;
let bilal2 = 2;  // a = a % 3, ab 'a' ki value 1 hogi
bilal /= bilal2;
console.log(bilal);


//6. %= (Modulus Assignment Operator)
// Is operator ka kaam hai, left-hand side wale variable ko right-hand side wale value se modulus lena aur result ko fir usi variable mein assign kar dena.

let Q = 10;
Q %= 3;  // a = a % 3, ab 'a' ki value 1 hogi
console.log(Q);




// 7. **= (Exponentiation Assignment Operator)
// Yeh operator left-hand side wale variable ko right-hand side wale value ki power tak raise karta hai aur result ko fir usi variable mein assign kar deta hai

let P = 2;
P **= 3;  // a = a ** 3, ab 'a' ki value 8 hogi

console.log(P);




// first multipilcation then addition
let mul = 5 + 3 * 3;
console.log(mul);
