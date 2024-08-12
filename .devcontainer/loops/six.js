// const coding=['js','ruby','java','python']
// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(item);

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const myNewNums=myNums.filter((num)=>num>4)
// console.log(myNewNums);

// const myNewNums1=myNums.filter((num)=>{
//     return num > 4
// })
// console.log(myNewNums1);

// const newnums=[]
// myNums.forEach((num)=>{
//     if(num>4){

//         newnums.push(num)
//     }
// })
// console.log(newnums);


const books=[
    { title:'book one',genre:'fiction',publish:1981,edition:2004},
    { title:'book two',genre:'non-fiction',publish:1992,edition:2008},
    { title:'book three',genre:'history',publish:1999,edition:2007},
    { title:'book four',genre:'non-fiction',publish:1989,edition:2009}
];

let userBooks=books.filter((bk)=>bk.genre==='non-fiction')
userBooks=books.filter((bk)=>bk.publish>=1900)

console.log(userBooks);

