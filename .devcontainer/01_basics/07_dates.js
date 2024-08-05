//DATE

// let myDate=new Date()
// // console.log(myDate.toString());
// // console.log(myDate.toDateString());
// // console.log(myDate.toJSON());
// // console.log(typeof myDate); //object


// let myCreatedDate=new Date(2024,0,23);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp=Date.now();

// console.log(myTimeStamp);
// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));


let newDate=new Date();
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getDay()+1);

newDate.toLocaleString('default',{
    weekday:"long"
})

