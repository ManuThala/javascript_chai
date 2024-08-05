const name='manu'
const repoCount=50

// console.log((name + repoCount + " value"));

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName=new String('manu-ls-harsh');
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('n'));

const newString=gameName.substring(0,4);
console.log(newString);

const anotherString=gameName.slice(-8,3)
console.log(anotherString);

const newString1="   manoj ";
console.log(newString1);
console.log(newString1.trim());

const url='https://manu.com/%20choudry';
console.log(url.replace('%20','-'));


console.log( url.includes('manu'));

console.log(gameName.split('-'));


