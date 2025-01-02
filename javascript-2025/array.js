// collection of items is called array

//Imagine you store marks of students in a class in a variable. You can store them in individual variables like this:

let student1 = 80;
let student2 = 90;
let student3 = 70;
let student4 = 85;
let student5 = 95;

// But what if you have a large number of students? It would be very difficult to manage them. This is where arrays come in handy.

// Arrays are used to store multiple values in a single variable. They are declared with square brackets [] and each value is separated by a comma ,.

//genrally when related  information and same type information is stored in a single variable, array is used.

// arrays is linear way to store data linear means data is stored in a sequence.

// array k andar position hoti hai, position is called index.

// array k andar hum alaag alaag types k information b store kar skty hain like string, number, boolean, object etc.
// but best practice is to store same type of information in an array.

// genarally arrays ko hum un situiations mein use karty hain jahan humein multiple values ko store karna hota hai. liken saray value ko aik hi variable mein store karna hota hai. 


//====================NOTED INTERSTING POINT OF ARRAY====================

// Arrays are zero-based, which means the first element in the array is at index 0, the second element is at index 1, and so on.a
// jab hum array ka typeof check karty hain to humein object milta hai. because array is a special type of object.
// array are internally stored as object in memory. but arrays ko object k comparison hum tora sa spearate treat karty hain.    

// our hum yee b imagine kar skty hain k array hamaray asiee object hain jis mai key value pair tu huta hain but ke jaga hum apny data ko index k through access karty hain.

let marks = [80, 90, 70, 85, 95];
console.log(marks); // [ 80, 90, 70, 85, 95 ]
console.log("size of marks array ",marks.length); // 5



let names = ["Ali", "Ahmed", "Asad", "Kashif", "Nasir", "Maaz Shah"];
console.log(names); // [ 'Ali', 'Ahmed', 'Asad', 'Kashif', 'Nasir', 'Maaz Shah' ]
console.log("size of names array ",names.length); // 5








// Array indices are zero-based: the first element of the array is at index 0, the second element is at index 1, and so on.

let studentsMarks = [80, 90, 70, 85, 95];
console.log(studentsMarks[0]); // 80
console.log(studentsMarks[1]); // 90
console.log(studentsMarks[2]); // 70
console.log(studentsMarks[3]); // 85
console.log(studentsMarks[4]); // 95

// if we try to access an index that does not exist, we get undefined.
console.log(studentsMarks[5]); // undefined


let change = studentsMarks[0] = 100;
console.log(studentsMarks); // [ 100, 90, 70, 85, 95 ]

// beacuase array is mutable, we can change the value of an array element by directly accessing it.
// string is immutable, we can not change the value of a string element by directly accessing it.



// next topic looping over array

console.log("======================================");

let friends = ["Ali", "Ahmed", "Asad", "Kashif", "Nasir", "Maaz Shah"];
//frist way to prnint elements of array by console.log
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);
console.log(friends[4]);
console.log(friends[5]);

//but this is not a good way to print elements of array. because if we have large number of elements in array then we have to write console.log for each element. so this is not a good way to print elements of array.

//second way to print elements of array by for loop

// when we use for loop an array then we have to use array.length property to get the size of array. because we do not know the size of array. so we have to use array.length property to get the size of array. 
console.log("print elements of array by for loop"); // 6

for(i = 0; i < friends.length; i++){
    console.log(friends[i]);
    
}


// using for loop we can print elements of array in reverse order.


let fruits = ["apple", "banana", "orange", "grapes", "mango"];
for(let fruit of fruits){
    console.log(fruit);
}


let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
for(let city of cities){
    console.log(city.toLocaleUpperCase());
}




//let's practice array with some tasks

let numbers = [85, 97, 44, 37, 76, 60]

// first sum of all numbers in array
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);
// then divide sum by number of elements in array
let average = sum / numbers.length;
console.log(`averga marks of class student = ${average}`);



let price = [250, 645, 300, 900, 50];
for(let i = 0; i < price.length; i++){
    let discount = price[i] / 10;
    let finalPrice = price[i] - discount;
    console.log(`final price of product ${i + 1} = ${finalPrice}`);
}

//different between for loop and for of loop 
// for loop is used when we want to access the index of array and for of loop is used when we want to access the elements of array.
//for example if we want to print the index of array then we use for loop and if we want to print the elements of array then we use for of loop.


// for loop example
let colors = ["red", "green", "blue", "yellow", "black"];
for(let i = 0; i < colors.length; i++){
    console.log(`index of color ${colors[i]} is ${i}`);
}

// for of loop example
console.log("====================================== for of loop example");

let = idx = 0;
for(let color of colors){
    // console.log(color);
    idx++;
    console.log(`index of color ${color} is ${idx}`);
}