// for (let i = 1; i <= 10; i++) {
//     const element=i;
//     if (element==5)
//         console.log('5 is best number');       
//     console.log(element);
    
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop value:${i}`);
    
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`inner loop value:${j} for outer loop value:${i}`);
//         console.log(i + '*' + j + '=' + i*j);
        
//     }    
// }

// let array=['flash','batman','superman']
// console.log(array.length);

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);  
// }

//Break and continue

for (let i = 0; i <=20; i++) {
    if(i==5){
        console.log('Deteted 5');
        break;
    }
    console.log(`value of i is :${i}`);
    
}
for (let i = 0; i <=20; i++) {
    if(i==5){
        console.log(`jump from the value ${i}`);
        continue;
    }
    console.log(`value of i is :${i}`);
    
}