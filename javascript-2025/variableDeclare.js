// // variable declaration in javascript 

// // let var and cont 


// // var es ko hum bar bar re-declare kar skty hai 

// // ye old triqaa hai es ko hum use nhi kart q k yee coding bug zayadaa create kartaa hai

// // Scope: Function-scoped hota hai, yani poore function ke andar accessible hota hai, chahe wo kisi block ke andar ho.
// // Note: Iska use avoid karna chahiye, kyunki yeh unexpected bugs create kar sakta hai.

// // Global Scope with var

// // Agar aap var ko kisi function ke bahar declare karte hain, to wo global variable ban jata hai. Global variables poore program me accessible hote hain.

// var age = 25;
// var fullName = "Bilal";
// var fullName = "Khan";
// var fullName = "Ali";
// var fullName = "Hassan";
// // console.log(fullName);

// var name = "Ali"; // Global variable

// function greet() {
//   console.log("Hello " + name); // Accessing the global variable
// }

// greet(); // Output: Hello Ali
// console.log(name); // Output: Ali



// // Function Scope with var
// // Agar aap var ko kisi function ke andar declare karte hain, to wo sirf us function ke andar accessible hota hai (function-scoped hota hai).

// function myName(){
//     var yourName = "Bilal";
//     console.log(yourName);
// }
// myName();

// // console.log(yourName);  // yaha per hum var ko access kanry kee kohish krty hai liken impossible hai q ab var fucntion scope matlab hum es ko sirf fucntion mai use kr skty hai function k bahir nhiii



// // =============================Let key word====================================
// console.log("==================let key word==================");


// // hun nai var k case mai deakhaaa k hum bar bar variable ko re-declare kr skty hai let mai nhiii 

// // but let k case mai nhii kar skty

// // let school = "ABC";   // deakooo yaha per hum re declare nhi kr skty hai
// // let school = "XYZ";
// // cannot be re-declared but can be updated 
// // let is block scoped variable


// // Block Scope ka matlab curely bracket {}: let sirf usi block {} ke andar kaam karta hai jahan declare kiya gaya ho.

// function scopeLet(){
//     let x =  "Muhammad Bilal Khan From Lakki Marwat"
//     console.log(x); // yaha access kar skty hai
    
// }
// scopeLet()
// // console.log(x);// ab ji hun nai function k andar variable ko declate kya let k 7 sirf fucnton k andar access kr skty hai {} block scope



// let bilal = "bilal is very good boy"
// console.log(bilal);



// // ============================Const key word====================================
// console.log("==================Const key word==================");

// // yee same hai let ke tarhaa liken jab aik bar decalre kary tu usky value update nhi kr skty hai
// // our yee b let ke tarhaaa block scope hai jub hum aik bar {} es mai decakre kry tu es k andar access kar skty hai bahir nhii

// function scopeConst(){
//     const nameBilal = "Bilal mien const hun our function k anadr hun"
//     console.log(nameBilal); // yaha access kar skty hai
// }
// const awis = "prepartion for mdcat test"
// console.log(awis);
// // console.log(nameBilal); // yaha per nhii access kr skty hai const ko 

// scopeConst()

// // aik our common cheez hai jab hum let keyword k sath variable ko declare kry our value assign nhii kary tu print hu ga undefined 
//  let w;
//  console.log(w);   //ab ye undefined show hugaaq k hum nai koi value assign nhii ke 
 
// // but jab const k cae agar hum variable ko declare kary our value assign nhi kary tu print nhii huga error aayee ga

// // const n;
// // console.log(m);


// // var x = "Pakistan is very beautifull country";
// // var x = "India is very beautifull country";
// // x = "Afghanistan is very beautifull country";
// // console.log(x);

    // function scopeLevl(){
    //     if(true){
    //         var x = "Pakistan is very beautifull country";
    //         console.log(x);
    //     }
    //     console.log(x);  // accessible here beacause var follow function level scope
    // }
    // scopeLevl()


//     function scopeLevl2(){
//         if(true){
//             let x = "I am from lakki Marwat Darra Pezu";
//             const y = "Muhammad Awais Qarni Is from Dera Isamil Khan";
//             console.log(x);
//             console.log(y);
//         }
//         // console.log(x);  //yee let our const yaha access nhii q k yee hum block scope sy bahir access kar rahy hai isliyee
//         // console.log(y);
        
        
//     }

// scopeLevl2();




function exampleScope() {
    if (true) {
        var varVariable = "Function-level scope"; // Accessible throughout the function
        let letVariable = "Block-level scope";    // Accessible only within this block
        const constVariable = "Block-level scope"; // Accessible only within this block

        console.log(varVariable); // Output: ✅"Function-level scope"
        console.log(letVariable); // Output:✅ "Block-level scope"
        console.log(constVariable); // Output:✅ "Block-level scope"
    }
    
    console.log(varVariable); // Output:✅ "Function-level scope" (accessible here)
    // console.log(letVariable); // ❌ Error: letVariable is not defined
    // console.log(constVariable); // ❌ Error: constVariable is not defined
}


// exampleScope();

// console.log("==================My Lecture==================");

// var x = 20;  // var re-declare kry tu uski value update hogia
// var x = 30; //  pehy 20 ta value x ke ab re-declare kry tu uski value update hogia 
// // NOTED POINT var mai hum same name diyee variable ko koi issue nhii aa raha but let const mai ye nhii chalta 

// x = 50;  // re-assign
// console.log(x);



// // let
// // let Bilal = 10;  // re-decaled not allowed
// // let Bilal = 20;
// // console.log(b);

// //  let khan = "Muhammad Bilal web Developer";
// //  khan = 20;
// //  console.log(khan);
 
// // cannot be re-declared but can be updated 
// // let is block scoped variable






// Question variables




var x = 5;
let y = 10; 
const z = 15;

function test() {
    var x = 20; // Same variable name `x`, allowed because `var` has function-level scope
    let y = 25; // New variable `y` specific to this block
    console.log(x, y, z); // Output: 20 25 15
}

test();
console.log(x, y, z); // Output: 5 10 15


// let c = 22;
// if(c >= 20){
//     console.log("Good morning");
// }else{
//     console.log("please try again");
// }



 // give input from user and check whether it is greater than 20 or not

// let userNum = prompt("give number 1 to 100 and check your funny Emoji");
// if(userNum > 100){
//     console.log("I Love You ❤️❤️❤️");
// }else if(userNum < 80){
//     console.log("Kiss You 😘😘😘");
// }else if(userNum < 60){
//    console.log("Smile is very beautiful 😊😊😊");
// }else if(userNum < 40){ 
//     console.log("This is for you🌹🥀🌹");
// }else if(userNum < 20){
//     console.log("Please give high number and check my Love 😔😔😔");
// }else{
//     console.log("please give number 1 to 100");
// }


