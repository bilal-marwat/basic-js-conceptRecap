// unary operator in javascript 




let a =  5;
let b = 2;

console.log("a =", a , "b =", b);

// a = a + 1;

 // ab for example hum nai yaha per a mai 1 ko plus kya tu yee 6 print huga uper 5 hai liken yaha per hum nai 1 ko plus kya  
// ab es ko shortcut use kary rahy hai
// a--;    
//++a  //per increment kya tu yee 6 print hoga pehly value change huga

console.log("a = ", a++);
console.log(a);



let c = 10;
let d = 20;

console.log("c =", c , "d =", d);

console.log("c = ", c--);
console.log(c);





///================================ INCREMENT(++)
console.log("=============================INCREAMENT(++)");

//Yeh operand ki value ko 1 se increase karta hai.

//Pre-increment (++x): Pehle value badhata hai, phir return karta hai.

//Post-increment (x++): Pehle value return karta hai, phir badhata hai.


let x = 5;
console.log(++x); // Output: 6 (Pehlay increment hua)
console.log(x++); // Output: 6 (Pehle value use hui, phir increment hua)
console.log(x);   // Output: 7





//==============================Decrement(--)
console.log("=============================DECREAMENT(--)");

// Decrement (--)
// Yeh operand ki value ko 1 se decrease karta hai.

// Pre-decrement (--x): Pehle value kam hoti hai, phir return hoti hai.
// Post-decrement (x--): Pehle value return hoti hai, phir kam hoti hai
let y = 10;
console.log(--y); // Output: 9 (Pehlay decrement hua)
console.log(y--); // Output: 9 (Pehle value use hui, phir decrement hua)
console.log(y);   // Output: 8
