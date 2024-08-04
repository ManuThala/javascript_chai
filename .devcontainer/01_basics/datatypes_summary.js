// primitive datatypes

// 7 types--> String,Number,Boolean,null,NAN,undefined,symbol,BigInt

const score=100;

const scoreValue=100.3;

const isLoggedIn=false;

const outsideTemp=null;

let userEmail; /* or */ let userEmail1=undefined;

const id=Symbol('123');
const anotherId=Symbol('123');


console.log(id===anotherId);

// const bignumber=3265895612n;




// console.log(id);
// console.log(anotherId);







// console.log(typeof score);


//Reference type (non primitive)

// Array, Objects, Functions

const heros=["shaktiman",'nagraj',"doga"]

let myObj=
{
    name:'manu',
    age:26
}


const myfunction = function (){
    console.log('hello world');
}

console.log(typeof myObj);
