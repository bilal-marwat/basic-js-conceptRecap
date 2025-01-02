// for of loop

// Yeh specially objects ke liye use hoti hai, jahan keys ko access karna ho.

// Yeh object ke properties (keys) iterate karti hai.


let obj1 = {
    name: "Muhammad Bilal",
    age: 20,
    address: "Lakki Marwat",
}
for(let key in obj1){
    console.log(`Key = ${key} = Value = ${obj1[key]}`);
}


// for of loop

// Yeh arrays ke liye use hoti hai, jahan values ko access karna ho. our string 

let arr = ["Muhammad Bilal", "Muhammad Awais", "Muhammad Qarni"];
for(let value of arr){
    console.log(value);
}

let strr = "Muhammad Bilal";
for(let value of strr){
    console.log(value.toUpperCase());
}


//=======================Task for For...of Loop==================
// Step 1: Array of Numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Step 2: Using for...of loop
for (let num of numbers) {
    // Step 3: Check even or odd
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}

let strr1 = "Muhammad Bilal";
let size = 0;
for(let value of strr1){
    console.log(value);
    
    size++;
}
console.log(size);
