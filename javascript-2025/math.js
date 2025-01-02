let min = 5;
let max = 15;

// Suppose Math.random() = 0.8
let randomNum = Math.random() * (max - min + 1); // 0.8 * 11 = 8.8
randomNum += min; // 8.8 + 5 = 13.8
let finalNum = Math.floor(randomNum); // 13
console.log(finalNum); // Output: 13




let minNumber = 38;
let maxNumber = 65;

let randomNumber = Math.random() * (maxNumber - minNumber + 1);
randomNumber += minNumber;
let finalNumber = Math.floor(randomNumber);
console.log(finalNumber);



let kamNumber = 10;
let samNumber = 20; 

let random = Math.floor(Math.random() * (samNumber - kamNumber + 1)) + kamNumber;
console.log(random);

