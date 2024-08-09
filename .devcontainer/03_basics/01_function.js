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
console.log(loginUserMessage('manu'));
console.log(loginUserMessage());
console.log(loginUserMessage());