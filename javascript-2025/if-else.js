// today topic if else in javascript
// if else in javascript



//=============================== if else defination
// If-Else Ki Definition:
// JavaScript mein if-else ka use hum conditions check karne ke liye karte hain. Agar condition true ho, to ek block of code execute hoga; agar false ho, to doosra block execute hoga.


//SYNTAX
// if (condition) {

//   // code to execute if condition is true

// } else {

//   // code to execute if condition is false

// }



// first simple example

let marks = 66;

if(marks >= 65){ // yaha per hum nai aik simple  if else ka example banyaa hai wo yee hai marks naam ka aik varaible ko delacer kya us mai number 100 rakhaaa ab if else k sath usko check krengy if mai condtion lagengy agar number  60 sy kaam hu gaya tu false hu ga agar zayad hu gayee tu true huga  
    console.log("You are pass");
}else{
    console.log("You are fail");
}


// second example

let temperature = 30;
// yaha per agar temperature 30 sy zayada huwa tu garmi hugee agar kaam huwa tu garmi nhii hugeee
if (temperature > 20) {
  console.log("It's hot outside!");
} else {
  console.log("It's not that hot.");
}


// third example

let age = 25;
if (age >= 26) {
  console.log("You can vote.");
} else {
  console.log("You can't vote yet.");
}



//============================================= Example 2: Else If Ladder

// if (condition1) {

//     // Code block for condition1

//   } else if (condition2) {

//     // Code block for condition2

//   } else {
//     // Code block for all other cases
//   }

//   let numbers = prompt("Enter your Marks and check your grade");
//   if(numbers > 90){
//     console.log("Greate your number is 100 grade A1");
//   }else if(numbers > 80){
//     console.log("Greate your number is less than 90 thats why your grade A2");
//   }else if(numbers > 60){
//     console.log("Greate your number is less than 80 thats why your grade A3");
//   }else if(numbers > 40){
//     console.log("Greate your number is less than 60 thats why your grade A4");
//   }else if(numbers > 20){
//     console.log("Greate your number is less than 40 thats why your grade A5");
//   }else{
//     console.log("you are fail");
//   }
    
 
  
  let mark = 70;

  if (mark >= 90) {
    console.log("Grade: A");
  } else if (mark >= 75) {
    console.log("Grade: B");
  } else if (mark >= 50) {
    console.log("Grade: C");
  } else {
    console.log("Grade: F");
  }
  




  // ================ nested if else 

 // Example 1: Nested If-Else Statements
  let checkAge = 15; // Age of the person
let isCitizen = true; // Is the person a citizen?

if (checkAge >= 18) { // Check if age is 18 or more
  if (isCitizen) { // Check if the person is a citizen
    console.log("You are eligible to vote."); // If both conditions are true
  } else {
    console.log("You are not a citizen, so you cannot vote."); // If not a citizen
  }
} else {
  console.log("You are too young to vote."); // If age is less than 18
}



// First Condition: if (age >= 18)

//     Agar age 18 ya usse zyada hai, to andar ka block execute hoga.
//     Agar nahi hai, to else block chal jayega: "You are too young to vote."
//     Second Condition: if (isCitizen)
    
//     Agar pehla condition true hai, to hum check karenge kya person citizen hai.
//     Agar hai, to output hoga: "You are eligible to vote."
//     Agar nahi hai, to output hoga: "You are not a citizen, so you cannot vote."



// 2 example nested if else statement

let passMarks = 52;
let goldMarks = 80;

if (passMarks >= 50) { // Check if marks are 50 or more
  if (goldMarks >= 80) { // Check if marks are 75 or more
    console.log("You passed with distinction!"); // If both conditions are true
  } else {
    console.log("You passed."); // If only first condition is true
  }
} else {
  console.log("You failed."); // If marks are less than 50
}




// ternary operator

let bilal = 18;

console.log("bilal is " + (bilal >= 18 ? "eligible" : "not eligible") + " to vote.");


// short circuiting
// defination of short circuiting

// If the first condition is true, then the second condition is not evaluated.
// If the first condition is false, then the second condition is evaluated.

// Example 1: Short Circuiting in If-Else Statements
// working with non circuiting


// console.log(false || 23);

let personeAge = 18;
let checkAlpha = prompt("Enter a number from 1 to 10");

if(checkAlpha == 1 ){
    console.log("A");
    
}else if(checkAlpha == 2){
    console.log("B");
}else if(checkAlpha == 3){
    if(personeAge >= 18){
        console.log("yes you are eligible for COMSAT university");
    }
    console.log("C");
}else if(checkAlpha == 4){
    console.log("D");
}else if(checkAlpha == 5){
    console.log("E");
}else if (checkAlpha == 6){
    console.log("F");
}else if(checkAlpha == 7){
    console.log("G");
}else if(checkAlpha == 8){
    console.log("H");
}else if(checkAlpha == 9){ 
    console.log("I");
}else if(checkAlpha == 10){
    console.log("J");
}else{
    console.log("please enter 1 to 10");
    
}
let a = 10;
let c = 12;
let d = "Hello"

let condtion1 = c > a;
let condtion2 = a === 10;
let condtion3 = d == "Hello";
console.log(condtion1 && condtion2 && condtion3)
// now convert to ternary operator

let number = 93;

if(number %2 === 0){
console.log("number is odd");
}else{
    console.log("this is not odd number");
}



let boyAge = 20;
let fscMarks = 1050;
let boyFatherEmply = true;


if (boyAge > 18){
    console.log("Boys age are eligible for universtuy admission");
    if (fscMarks >= 1000){
        console.log("Boys fsc marks are eligible for universtuy admission");
    }
}else if (boyFatherEmply){
    console.log("Boys elgile for admmision due to employment qouota");
}else{
    console.log("Boys are not eligible for admission");
}



// let studentScore = prompt("Enter your marks 0 to 100");
// if(userScore >= 80 && userScore <= 100){
//     console.log("A grade");
// }else if (userScore >= 60 && userScore <= 80){
//     console.log("B grade");
// }else if (userScore >= 40 && userScore <= 60){
//     console.log("C grade");
// }else if (userScore >= 20 && userScore <= 40){
//     console.log("D grade");
// }else{
//     console.log("F grade");
// }





let userScore = prompt("Enter your marks (0 to 100):");

// Check if the input is a valid number
if (isNaN(userScore) || userScore.trim() === "") {
    console.log("Invalid input! Only numbers are allowed.");
} else {
    // Convert the input to a number
    userScore = Number(userScore);

    // Check if the number is within the range
    if (userScore >= 80 && userScore <= 100) {
        console.log("A grade");
    } else if (userScore >= 60 && userScore < 80) {
        console.log("B grade");
    } else if (userScore >= 40 && userScore < 60) {
        console.log("C grade");
    } else if (userScore >= 20 && userScore < 40) {
        console.log("D grade");
    } else if (userScore >= 0 && userScore < 20) {
        console.log("F grade");
    } else {
        console.log("Invalid marks! Please enter a number between 0 and 100.");
    }
}




