const user={
    userName:'manu',
    price:999,

    welcomeMessage:function(){
        console.log(`${this.userName} welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.userName='harsh'
// user.welcomeMessage()

// console.log(this);



// function code(){
//     let userName='manu'
//     console.log(this.userName);
    
// }
// code()


const chai=()=>{
    userName='manu'
    console.log(this.userName);
    
}
// chai()

// const addTwo=(num1,num2)=> num1+num2
const addTwo=(num1,num2)=>(num1+num2)

console.log(addTwo(2,3));
