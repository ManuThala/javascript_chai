//Array
const myArr=[0,1,2,3,4,5,true,'manu'];

const myHeroes=["shakthiman","superman"];

const myArr2=[1,2,3,4,5]

// console.log(myArr[1]);

//Array methods

// myArr.push(7);
// console.log(myArr); [ 0, 1, 2, 3, 4, <1 empty item>, 5, true, 'manu', 7 ]
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();


// console.log(myArr.includes(9)); false
// console.log(myArr.indexOf(4)); index it will return

// const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr);


//slice spice

console.log("A ",myArr);
const myn1=myArr.slice(1,3);
console.log(myn1);
console.log("B ",myArr);

const myn2=myArr.splice(1,3);
console.log(myArr);

console.log(myn2);





