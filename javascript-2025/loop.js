//Loops ek aisi technique hai jo hume repeated tasks ko automate karne mein madad karti hai. Jab hume ek hi kaam baar-baar karna ho, toh hum loops ka use karte hain taake code short aur efficient ho jaye.

// Haan, for loop JavaScript ka basic concept hai aur yeh programming ke bohot important parts mein se ek hai. Iska use hum repetitive tasks ko efficiently handle karne ke liye karte hain.



// Parts of for loop:
// Initialization: Yeh part loop ki shuruat hoti hai, yahan aap ek variable ko define karte hain jo loop ki starting point hota hai. Example: let i = 0;

// Condition: Yeh part loop ko run karne ki condition define karta hai. Jab tak yeh condition true rahegi, loop chalega. Jab condition false ho jaye, loop band ho jayega. Example: i < 5;

// Increment/Decrement: Yeh part loop ko update karta hai, jaise loop ke har iteration ke baad variable ka value badalna ya kam karna. Example: i++ (jo i ki value ko 1 se increase karta hai har iteration ke baad).


//===========For loop================


for(let count = 0; count <= 5; count++){
console.log("Bilal Marwat",count);
}


let i = 0;

for(i = 0; i <= 5; i++){
    console.log("user number print",i);
}



// task 1 

// print 1 to 10 numbers using for loop
let taskOne = 1;

for(taskOne = 1; taskOne <= 10; taskOne++){
    console.log("This is your task One = ",taskOne);
} 



// task 2

// print even number from 1 to 10 using for loop
let taskTwo = 1;

for(taskTwo = 1; taskTwo <= 20; taskTwo++){
    if(taskTwo % 2 == 0){
        console.log("This is your task Two = ",taskTwo);
    }
}


for (let taskTwo = 2; taskTwo <= 20; taskTwo += 2) {
    console.log("alternative way  = ", taskTwo);
}


// task 3
// give input from user number and print multiplication table of that number
// let taskThree = prompt("Enter number for multiplication table");

// for(taskThree = 1; taskThree <= 10; taskThree++){
//     console.log("This is your task Three = ",taskThree * 5);
// }


// User input for number and range

// let tableNumber = parseInt(prompt("Enter the number for which you want the table:"));
// let tableRange = parseInt(prompt("Enter the range up to which you want the table:"));

// // Validate if the inputs are valid numbers
// if (!isNaN(tableNumber) && !isNaN(tableRange)) {
//     console.log(`Multiplication Table of ${tableNumber} up to ${tableRange}`);
//     for (let i = 1; i <= tableRange; i++) {

//         document.write(`${tableNumber} x ${i} = ${tableNumber * i} <br>`);
//         console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
//     }
// } else {
//     console.log("Invalid input! Please enter valid numbers.");
// }


// Task 4: Reverse Loop
for (let i = 10; i >= 1; i--) {
    console.log("Reverse Order Number =", i);
  }
  


  for(let i = 50; i >=40; i--){
      console.log("Reverse Order 50 to 40 Number =",i);
  }



  // ======================== WHILE LOOP ========================
  console.log("=====================================While Loop========================================");

  let a = 0;
  while(a <= 5){
      console.log("Bilal Marwat",a);
      a++;
    }
  

    let number = 100;
    while(number >= 0){
        console.log("Number is = ",number);
        number--;
    }




    //============================== Do While Loop ========================
    console.log("=====================================Do While Loop=====================================");

    // es mai agar condtion false hugayee fr b body execute hugi ek dafa

    let b = 0;
    do{
        console.log("Bilal Marwat",b);
        b++;
    }while(b > 10);

console.log("=========================================================");

    let str = "Muhammad Bilal khan Marwat";
    let size = 0;
for(let i of str){
  console.log(" i ", i);
    size++;
}
console.log("Size of string = ",size);


//for in loop 

let obj = {
    name: "Bilal",
    age: 22,   
    address: "Lakki Marwat",
    country: "Pakistan",}

    for(let key in obj){
        console.log("Key = ",key,"Value = ",obj[key]);
    }



    let numbers = 50;
    if(numbers % 2 == 0){
        console.log("Even Number hun mien");
    }else{
        console.log("Odd Number hun mien");
    }

    for(let i = 1; i <= 12; i++){
        if(i % 2 !== 0){
            console.log("Even Number = ",i);
        }
    }

   
    // for(let bilal = 0; bilal <= 100; bilal++){
    //     if(bilal % 2 === 0){
    //         console.log(`Even Number = ${bilal}`);
    //     }else{
    //         console.log(`Odd Number = ${bilal}`);
    //     }
    // }




 //find divisible number 0 to 50

 for(let i = 0; i <= 50; i++){
     if(i % 5 == 0){
         console.log("Divisible by 5 = ",i);
     }
 }

//  User se ek number input lein, aur us number se reverse counting start karein.

// let userNumber = parseInt(prompt("Enter a number:"));
// let j = userNumber;
// while(j >= 0){
//     console.log("Reverse Order Number =",j);
//     j--;
// }

// let applicantNumber = parseInt(prompt("Enter a number and we will print reverse counting:"));
// let reverse = applicantNumber;
// for(reverse; reverse >= 0; reverse--){
//     console.log("Reverse Order Number =",reverse);
// }


for(let i = 20; i >= 0; i --){
    if(i % 2 == 0){
        console.log("Even Number = ",i);
    }
}