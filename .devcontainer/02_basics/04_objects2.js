// // const tinderUser=new Object();

// const tinderUser={}
// tinderUser.id='123abc'
// tinderUser.name='manu'
// tinderUser.isLoggedIn=false

// // console.log(tinderUser);

// const regularUser={
//     email:'some@gmail.com',
//     fullname:{
//         userfullnmae:{
//             FirstName:'manu',
//             lastName:'ls'

//         }
//     }
// }
// console.log(regularUser.fullname.userfullnmae.FirstName);

// const obj1={1:'a',2:'b'}
// const obj2={3:'c',4:'d'}
// const obj4={5:'e',6:'f'}

// // const obj3={obj1,obj2} { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// // const obj3=Object.assign({},obj1,obj2,obj4)

// const obj3={...obj1,...obj2,...obj4}
// // console.log(obj3);


// const users=[
//     {
//         id:1,
//         email:'mannu@gmail.com'
//     },
//     {
//         id:2,
//         email:'har@gmail.com'
//     }
// ]

// users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course={
    courseName:"js in kannada",
    price:'999',
    courseInstructor:"manu"
}

const {courseInstructor:instructor}=course
console.log(instructor);


const navbar=({companyName})=>{

}
navbar(companyName='manu')