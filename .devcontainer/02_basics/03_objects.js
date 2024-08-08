//singleton
//object.create



//object literals

// const mysym=Symbol("key1");

const jsuser={
    name:'manu',
    age:26,
    // [mysym]:'mykey1',
    location:'tumkur',
    email:'manu@google.com',
    isLoggeddIn:false,
    lastLogInDays:['Monday','Tuesday'],
    'fullname':'manuls'
}

// console.log(jsuser.age);
// console.log(jsuser['email']);
// console.log(jsuser['fullname']);
// console.log(jsuser[mysym]);
 
// jsuser.email='harsha@google.com';
// Object.freeze(jsuser);
// jsuser.email='harsha@microsoft.com'
// console.log(jsuser);


jsuser.greetings=function(){
    console.log('Hello js user');
    
}
console.log(jsuser.greetings());


jsuser.greetings2=function(){
    console.log(`Hello js user,${this.name}`);
    
}
console.log(jsuser.greetings2());