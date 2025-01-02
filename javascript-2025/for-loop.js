
// declaration sirf aik baar huta hain  
// pehly hum nai varaible ko decalre kya our us ko zero 0 value assgin kya 
// jab loop start huta hain tu condtion ko check krtaa hain k 0 less than 10 hain tu true hain tu loop chalay ga
// es k baad body execute huta hain jab body execute huta hian tu value increment huti hain
// jab value increment hute fr condion check huti hain k 1 less than 10 hain tu true hain tu loop chalay gan
// es tarah loop chalay ga jab tak condtion false na ho jaye



for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("Hello i am five",element);
        
    }
    console.log("Index = ",element);
}


// for (let i = 1; i <= 10; i++) {
//     console.log(`Hello i am outer loop ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`Hello i am inner loop ${j} and i am also inner loop ${i}`); 
//     }  


let arr = ["Ali","Ahmed","Asad","Kashif","Nasir","Noman","Talha","Usman","Zain","Zohaib"];
for(let i = 0 ; i < arr.length; i ++){
   console.log(arr[i]);
   
}


//break and continue key words

for(let i = 1;  i <= 100; i++){
    
    if(i == 5 ){
        console.log("Hello i am five",i);
        
        break;
    }
    console.log(i);
}