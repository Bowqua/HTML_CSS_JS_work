/*
//1
let text = prompt();
let regex = /[0-9]/g;
console.log(text.replace(regex, '*'));
*/

/*
//2
let digits = prompt();
let count = digits.match(/0/g);
console.log(count.length);
*/

/*
//3
let password = prompt();
let checkOne = /^[a-zA-Z0-9]+$/.test(password) && /(\d[a-zA-Z]|[a-zA-Z]\d)/.test(password);
let checkTwo = password.match(/[a-zA-Z]/g);
let checkThree = password.match(/[0-9]/g);
console.log(checkOne && checkTwo.length >= 5 && checkThree.length >= 5 ? 'YES' : 'NO');
*/

/*
//4
let data = prompt();
let regex = /^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}$/;

console.log(regex.test(data) ? 'YES' : 'NO');
*/

/*
//5
let text = prompt();
let result = text.match(/\d+/g).map(Number);

console.log(result);
*/

/*
//6
let password = prompt();
console.log(/^\w/g.test(password) ? 'YES' : 'NO');
*/