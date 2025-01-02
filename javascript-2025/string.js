// string topic in javascript

// string literal

// Jab aap direct quotes ke andar koi text likhte hain, jaise:
//Ye String literal hai. JavaScript mein string ko direct quotes mein likhna zyada common hai, aur ye ek primitive value hota hai.

let user = "Bilal";
let follower = 50;
console.log(user + follower + " Bilal has 50 followers");

let name = "Muhammad Bilal";
let adress = "lakki marwat";
let age = 22;
// yee old tariqa hain our es k nechy new tariqa use krty hain

//console.log("My name is " + name + " I live in " + adress + " I am " + age + " years old");

// use backtick ``
console.log(`my name is ${name} and i am from ${adress} and i am ${age} years old`);



let a = 10;
let b = 15;

//console.log("The sum of a and b = " + (a + b));
console.log(`The sum of a and b = ${a + b}`);










//==============================================STRING METHODS======================log=====================

console.log("==================================STRING METHODS======================log=====================");


//2. String Object

// Agar aap new String() ka use karte hain, to aap ek String object create kar rahe hain.

let str = new String(`bilal khan`);

// string value access
console.log(str);

// yaha check krengy k string mai kitny characters hain us k liyee .length ka use krty hain
console.log(str.length);


//ab aik oue method use krengy string ko captialize krny k liyee
console.log(str.toUpperCase());

// ab aik our method use krengy aik 2nd postion per konsa character hain string mai
console.log(str.charAt(6));

//agar apna check karna k string ka yee letter konsay index per hain
console.log(str.indexOf("k"));

// ab hum aik our method use krengy string ko divide krengy
console.log(str.substring(0, 4));

// ab hum aik our method ko use krengy jo ek part return kry ga
console.log(str.slice(1 , 2));


// ab hum aik our method use krengy trim() wo spaces ko ignore kertaa hai start our ending mai
console.log("==============");

let userName ="                 bilal khan   ";
console.log(userName);
console.log(userName.trim());




// ab hum aik our method use krengy replace()

// replace() method ka use JavaScript mein kisi string ke andar ek specific pattern ko replace (badalna) karne ke liye hota hai. Iska real-world mein kaafi zyada use hota hai jab aapko kisi string ke kuch parts ko update ya modify karna ho.

// let newString = originalString.replace(searchValue, newValue);


// searchValue: Wo part jo aap replace karna chahte hain (yeh string ya regular expression ho sakta hai).
// newValue: Wo nayi value jo replace hone wali value ki jagah aayegi.


let email = "johndo e@do ma in.com";
let cleanedEmail = email.replace(/ /g, "");  // Replace space with nothing
console.log(cleanedEmail);  // Output: "johndoe@domain.com""


let url = "https://example%90.com";
let cleanedUrl = url.replace("%90", "-20");  // Remove "https://"
console.log(cleanedUrl);  // Output: "www.example.com"


let bilalEmail = "john   doe@   domain.com"; // Multiple spaces
let bilalEmailCleaned = bilalEmail.replace(/\s+/g, ""); // Replace all spaces
console.log(bilalEmailCleaned); // Output: "johndoe@domain.com"


let awaisQarni = "     Muhammad Awais Qarni  ";
let spaceReomve = awaisQarni.trim(); // starting our ending mai spcaes ko remove kartaa hain
console.log(awaisQarni);
console.log(spaceReomve);



let myEmail = "bilal   khan   @bilal   khan";
let myEmailCleaned = myEmail.replace(/\s+/g, " "); 
console.log(myEmailCleaned); 


let userData = "My Name is M Awais and AWAIS is very Godd Boy and Awais is frontend developer";
let newUserData = userData.replace(/Awais/gi, "Bilal");
console.log(newUserData);


let hamidEmail = "hamid kh  an@  ham  idk  han";
let hamidEmailCleaned = hamidEmail.replace(/ /g, "");
console.log(hamidEmailCleaned);



let email2 = "john.doe@example.com";
let cleanedEmail2 = email2.trim().toLowerCase().replace(/ /g, "");

if (!cleanedEmail2.includes("@")) {
  console.log("Invalid email!");
} else {
  console.log("Valid email!");
}



let strr = "Bilal Khanan";
console.log(strr.replaceAll("an", "ie"));









