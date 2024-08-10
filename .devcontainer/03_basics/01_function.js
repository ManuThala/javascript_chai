function hello(){
console.log('h');
console.log('e');
console.log('l');
console.log('l');
console.log('o');

}

// console.log(hello());


// function add(a,b){
//     console.log(a+b);
     
// }

// add(1,2)
// add(1,'4')
// add(1,'a')

function Addition(a,b){
    let result=a+b;
    return result;
    console.log('manu');
    
}

const result=Addition(1,2)

// console.log(result);

function loginUserMessage(username='manu'){
    if(!username){
        console.log("please  enter username");
        return;
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage('manu'));
// console.log(loginUserMessage());
// console.log(loginUserMessage());


function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(2,3,4,5,6));

const objectOne={
    name:'manu',
    price:399
}

function callingObject(obj){
    // console.log(`the name is ${obj.name} and age is ${obj.age}`);
    
}

// callingObject(objectOne)

callingObject({
    name:'harsha',
    age:32
})

const myaNewArray=[3,4,5,67,888]

function callArray(arr){
    return arr[1];
    
}
console.log(myaNewArray);
