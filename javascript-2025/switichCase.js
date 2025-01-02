// switich case in javascript

// Switch Case Ka Basic Concept

// Switch case ka kaam if-else ki tarah hota hai, lekin yeh zyada readable aur clean lagta hai jab multiple conditions handle karni ho. Isme hum ek value ke hisaab se alag-alag actions perform karte hain.


//===================BASIC SYNTAX
// switch (expression) {

//     case value1:

//       // Code to execute if expression === value1

//       break;
  
//     case value2:

//       // Code to execute if expression === value2

//       break;
  
//     default:

//       // Code to execute if no cases match
//   }
  


// Explanation
// switch(expression): Yeh expression evaluate hota hai (e.g., koi variable ya calculation ka result).
// case value: Yeh value us expression ke result se compare hoti hai.
// break: Yeh switch case ko wahan end kar deta hai, warna agle cases bhi run honge (iska naam hai fall-through).
// default: Yeh tab execute hota hai jab koi bhi case match na kare.


let x = 2;

switch (x) {
  case 1:
    console.log("x is 1");
    break;// yaha per agar break na lagaii tu jaha per condtion true huta hain tu es k bad value print krtaa but usky hamar zarorat nhii hai isliyee break lagaty hai jahan conditon true huta hain udr break lag jata hain
  case 2:
    console.log("x is 2");
    break;
  case 3:
    console.log("x is 3");
   break;
   case 4:
    console.log("x is 4");
    break;
   case 5:
    console.log("x is 5");
    break;
   case 6:
    console.log("x is 6");
    break;
   case 7:
    console.log("x is 7");
    break;
   case 8:
    console.log("x is 8");
    break;
   case 9:
    console.log("x is 9");
    break;
   case 10:
    console.log("x is 10");
    break;

  default:
    console.log("not allowd number up to 10");
}

//=================================== EXAMPLE 2


//=========================== ISSUE WITH SWITCH CASE
// Tumhara code almost sahi hai, sirf ek chhoti si issue hai. prompt() jo value return karta hai, woh string hoti hai. Aur tumhare case conditions numbers (integers) hain. JavaScript mein strict comparison hoti hai (===), isliye string "1" aur number 1 equal nahi hote.



let days = prompt("Enter day number");// yaha per user jab number degaa tu string huga k prompt string return krta hain 

//let userPrompt = Number(days); // yaha per hum nai string ko number mai conver kya

// let userPrompt = Number(days); // yaha per same kaam huwa string ko number mai convert kya

let userDays = parseInt(days);
 
switch(userDays){
    case 2: 
    console.log("monday");
    break;
    case 2: 
    console.log("tuesday");
    break;
    case 3: 
    console.log("wednesday");
    break;
    case  4:
    console.log("thursday");
    break;
    case 5:
    console.log("friday");
    break;
    case 6:
    console.log("saturday");
    break;
    case 7:
    console.log("sunday");
    break;
    default:
    console.log("not a valid day"); 
}


// momth example 


let months =prompt("Enter number 1 to 12 and month name will print"); 
let userMonths = parseInt(months);
switch(userMonths){
    case 1:
        console.log("january is first month of year");
        break
        case 2:
            console.log("february is second month of year");
            break
            case 3: 
                console.log("march is third month of year");
                break
                case 4:
                    console.log("april is fourth month of year");
                    break
                    case 5:
                        console.log("may is fifth month of year");
                        break
                        case 6:
                            console.log("june is sixth month of year");
                            break
                            case 7:
                                console.log("july is seventh month of year");
                                break
                                case 8:
                                    console.log("august is eighth month of year");
                                    break
                                    case 9:
                                        console.log("september is ninth month of year");
                                        break
                                        case 10:
                                            console.log("october is tenth month of year");
                                            break
                                            case 11:
                                                console.log("november is eleventh month of year");
                                                break
                                                case 12:
                                                    console.log("december is twelfth month of year");
                                                    break
                                                    default:
                                                        console.log("not a valid month");
            
        
}

// create another siwtich case 10 number and a b c d e f g h i j k l m n o p q r s t u v w x y z

let numbers = prompt("Enter number 1 to 26 and alphabet will print"); 
let userNumbers = parseInt(numbers);
switch(userNumbers){
    case 1:
        console.log("a is first alphabet of alphabet");
        break
        case 2:
            console.log("b is second alphabet of alphabet");
            break
            case 3: 
                console.log("c is third alphabet of alphabet");
                break
                case 4:
                    console.log("d is fourth alphabet of alphabet");
                    break
                    case 5:
                        console.log("e is fifth alphabet of alphabet");
                        break
                        case 6:
                            console.log("f is sixth alphabet of alphabet");
                            break
                            case 7:
                                console.log("g is seventh alphabet of alphabet");
                                break
                                case 8:
                                    console.log("h is eighth alphabet of alphabet");
                                    break
                                    case 9:
                                        console.log("i is ninth alphabet of alphabet");
                                        break
                                        case 10:
                                            console.log("j is tenth alphabet of alphabet");
                                            break
                                            case 11:
                                                console.log("k is eleventh alphabet of alphabet");
                                                break
                                                case 12:
                                                    console.log("l is twelfth alphabet of alphabet");
                                                    break
                                                    case 13:
                                                        console.log("m is thirteenth alphabet of alphabet");
                                                        break
                                                        case 14:
                                                            console.log("n is fourteenth alphabet of alphabet");
                                                            break
                                                            case 15:
                                                                console.log("o is fifteenth alphabet of alphabet");
                                                                break
                                                                case 16:
                                                                    console.log("p is sixteenth alphabet of alphabet");
                                                                    break
                                                                    case 17:
                                                                        console.log("q is seventeenth alphabet of alphabet");
                                                                        break
                                                                        case 18:
                                                                            console.log("r is eighteenth alphabet of alphabet");
                                                                            break
                                                                            case 19:
                                                                                console.log("s is nineteenth alphabet of alphabet");
                                                                                break
                                                                                case 20:
                                                                                    console.log("t is twentieth alphabet of alphabet");
                                                                                    break
                                                                                    case 21:
                                                                                        console.log("u is twenty first alphabet of alphabet");
                                                                                        break
                                                                                        case 22:
                                                                                            console.log("v is twenty second alphabet of alphabet");
                                                                                            break
                                                                                            case 23:
                                                                                                console.log("w is twenty third alphabet of alphabet");
                                                                                                break
                                                                                                case 24:
                                                                                                    console.log("x is twenty fourth alphabet of alphabet");
                                                                                                    break
                                                                                                    case 25:
                                                                                                        console.log("y is twenty fifth alphabet of alphabet");
                                                                                                        break
                                                                                                        case 26:
                                                                                                            console.log("z is twenty sixth alphabet of alphabet");
                                                                                                            break
                                                                                                            default:
                                                                                                                console.log("not a valid alphabet");
}
