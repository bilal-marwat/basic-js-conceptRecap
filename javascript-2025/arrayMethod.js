// array method in javascript
//defination of array method
// array method is a function that is used to perform operations on arrays.
// array method is a built-in function that is used to perform operations on arrays.

// 1st method of array is push method

// push method is used to add elements at the end of array.
let colors = ["red", "green", "blue", "yellow", "black"];
console.log(colors);

colors.push("white", "pink");
console.log(colors); 
// push methos original array ko change karta hai. 




// 2nd method of array is pop method
// pop method is used to remove elements from the end of array.
let fruits = ["apple", "banana", "orange", "grapes", "mango"];
let removedFruit = fruits.pop();
console.log(" removed fruit =  ",removedFruit);
console.log(fruits);

// 3rd method to string method
// toString method is used to convert array to string.
let numbers = [1, 2, 3, 4, 5];
let string = numbers.toString();
console.log(typeof string);


// 4th method of array is concat method
// concat method is used to merge two or more arrays.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = [11, 12, 13, 14, 15];
let arr4 = arr1.concat(arr2,arr3);
console.log(arr4);


// 5th method of array is join method
// unshift method is used to add elements at the start of array.
let color = ["red", "green", "blue", "yellow", "black"];
color.unshift("white", "pink");
console.log(color);


// 6th method of array is shift method
// shift method is used to remove elements from the start of array.
let fruit = ["apple", "banana", "orange", "grapes", "mango"];
fruit.shift();
console.log(fruit);



//7 th method of array is slice method
// slice method is used to copy a portion of an array into a new array.
// slice method does not change the original array.

// slice take two arguments, first is the starting index and second is the ending index.
let friends = ["faisal", "Hamid", "Bilal","Ali", "Ahmed", "Khan", "Talha", "Asad"];
let goodFriends = friends.slice(2, 7);
console.log(goodFriends);



// 8th method of array splice method
// splice method is used to add or remove elements from array.
// splice take three arguments, first is the starting index, second is the number of elements to remove and third is the elements to add.


// let students = ["Ali", "Ahmed", "Asad", "Kashif", "Nasir", "Maaz Shah"];
// students.splice(2, 3, "Asad", "Kashif", "Nasir", "Maaz Shah");
// console.log(students);

let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
digits.splice(2, 3, 100, 200, 300);
console.log(digits);


// just add elements no delte elements
let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
values.splice(2, 0, 100, 200, 300);
console.log(values);

let bilal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
bilal.splice(4);
console.log(bilal);



// task 1
console.log("===============================Task 1==================");

let companies =["Blooberg", "Microsfot", "Uber", "Google", "IBM", "Netflix"];
let removeFirstCompany = companies.shift();
console.log(companies);
console.log(removeFirstCompany);


let replaceCompnay = companies.splice(1, 1, "Ola");
console.log(companies);


let addLastCompany = companies.push("Amazon");
console.log(companies);



let madrasa = ["Ali", "Ahmed", "Asad", "Kashif", "Nasir"];
let college = ["Bilal", "Hamid", "Khalid"];
madrasa.push(college);
console.log(madrasa[5][1]);

