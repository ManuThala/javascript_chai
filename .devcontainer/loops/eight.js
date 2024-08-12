const array=[1,2,3,4,5,6,7,8,9]

// const initialValue=0
// const myTotal=array.reduce(function(acc,curVal){
//     return acc+curVal
// },initialValue)

// console.log(myTotal);


// const myTottal=array.reduce((acc,cur)=>{
//     return acc+cur
// },0)

// console.log(myTottal);


const shoopingCart=[
    {itemName:'js-course',price:2999},
    {itemName:'python',price:999},
    {itemName:'java',price:1999},
    {itemName:'uby',price:999}
]

const shoppingPrice=shoopingCart.reduce((cur,item)=>
    cur+item.price,0)
console.log(shoopingCart);
