//Immediately invoked function expression(IIFE)
(function chai(){
    console.log('DB connected');
})();

// (expression)(execution)

// chai()

( (name)=>{
    console.log(`DB COnnected succesfully ${name}`); 
})('manu')

