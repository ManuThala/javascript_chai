// const userEmial='manu@gmail.com'
// if(userEmial){
//     console.log('Got user Email');
    
// }else{
//     console.log('dont have email');
    
// }


// falsy values
// false, 0, -0,Bigint, 0n,"",null,undefined,NaN

//truthy values
// '0', 'flase', ' ', [], {}, functin(){}

// if(userEmial.length===0){
//     console.log('array is empty');
    
// }
// obj={}
//     if(Object.keys(obj).length===0){
//             console.log('object is empty');           
//     }


//nulliish coalescing operatoe(??): null undefined

let val1;
// val1= 9 ?? 10
// val1= null ?? 10
val1= undefined ?? 10

console.log(val1);

val1==null?? 10 ?? 20
console.log(val1);

//Ternary operator 

// condition ? true : false

const iceTeaPrice=100

iceTeaPrice >= 80 ? console.log('greater than or equal to 80')
:console.log('more than 80');
