// comaprison Operator in javascript


// 1 Equal to (==)

// Yeh check karta hai ke do values equal hain ya nahi.

// Yeh type conversion karta hai. Matlab agar ek number aur ek string compare ho rahe hain, to string ko number mein convert karega aur phir comparison karega.
let x = 10;
let y = "10"; // equal to mai agar hum pass ek varaible number  mai hu 10 our dusraaa variable string "10" mai hoga to string ko number mein convert karega our 
console.log(x == y); // Output: true






//  2. Strict Equal to (===)

// Yeh check karta hai ke do values aur unki types dono same hain ya nahi.
// Ismein type conversion nahi hota.

let a = 10; // yaha per agar hamray pass aik variable number mai hu 10 our dusra variable string mai "10" tu yee false huga q k yee
// q k yee stricly check krtaa hain
let b = "10";
console.log(a === b); // Output: false



// ==================================================3 Not Equal to (!=)

// Yeh check karta hai ke do values equal nahi hain.

// Yeh bhi type conversion karta hai.

// Yeh check karta hai ke do values equal nahi hain.
// Type conversion karta hai: Agar types alag hain, to comparison ke liye type convert karega (matlab ek value ko dusri value ki type mein badal lega).

//console.log(5 != "5"); // Output: false

// 5 ek number hai, aur "5" ek string hai.
// != type conversion karega, string "5" ko number 5 mein badal dega.
// Dono values equal ho gayi, isliye result false hai (kyunki unequal nahi hain).


let c = 17;
let d = "16"; // es mai 2 variable number aur string ko compare krtaa hain agar donoo equal hugayee tu ye false huga 
console.log("yee Not equal ka operation hain",c != d); // Output: true




// =============================================== 4 Strict Not Equal to (!==)

// Yeh check karta hai ke do values ya unki types dono different hain.

//Type conversion nahi karta hai: Matlab directly dono values aur types ko compare karega.
// console.log(5 !== "5"); // true

// 5 ek number hai, aur "5" ek string hai.
// !== type conversion nahi karega, dono ki types alag hain, isliye result true hoga.



let e = 55;
let f = "52";

console.log("yee Not equal ka operation hain",e !== f); // Output: true



//==========================TEST=====================================

// Not Equal to (!=)

// question 1
console.log("yee test hain ",10 != "11"); // output false

console.log(20 != 15);

let o = "7";
console.log(o != 7);



// answer : yee result mai false print kary ga q k yee not qual != type of conversion krtaa hain ab hamary pass aik number hain 10 our aik string mai hain 10 but es ka type same nhii hia isliyeee yeee false huga




// strict Not Equal to (!==)

// question 2

console.log(10 !== "11");
console.log(5 !== "5");




