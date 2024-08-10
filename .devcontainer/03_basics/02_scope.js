// var c=300
let a=300

if(true){
    let a=10
    // const b=20
    // var c=30 
    // console.log('inner if a = ',a);
    
}


// console.log(a);
// console.log(b);
// console.log(c);



// function One(){

//     const userNmae='manu'

//     function two(){
//         const website='youtube'
//         console.log(userNmae);
//     }
//     // console.log(website);
//     two()
// }
// One()


if(true){
    const userName='manu'
    if(userName=='manu'){
        const website='youtube'
        console.log(userName+website);
        
    }
    // console.log(website);
    
}
// console.log(userNmae);

// ++++++++++++++++ intresting +++++++++++

console.log(addOne(5));


function addOne(value){
    return value+1
}


const addTwo=function(num){
    return num+2
}
addTwo(3)
