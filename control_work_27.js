// Level 1

/*
//1
function solve_d(a, b, c) {
    let discriminant = b ** 2 - 4 * a * c;

    if (discriminant < 0)
        console.log(-1);

    else if (discriminant == 0)
        console.log((-b + Math.sqrt(discriminant)) / (2 * a));

    else {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        console.log(Math.min(x1, x2));
        console.log(Math.max(x1, x2));
    }
}
*/

/*
//2
let text = prompt();
let regex = /ва/g;

console.log(text.replace(regex, ""));
*/

/*
//3
function fib(n){
    if (n == 0)
        return 0;

    else if (n == 1)
        return 1;

    return fib(n - 1) + fib(n - 2);
}
*/

/*
//4
let numbersArray = prompt().split(" ").map(Number);
console.log(numbersArray.map(element => element ** 2));
*/

/*
//5
function intersection(array1, array2){
    let result = [];

    for (let element of array1)
        if (array2.includes(element))
            result.push(element);

    return result;
}
*/

// Level 2

/*
//1
let text = prompt();
let reversed = text.split("").reverse().join("");

console.log(text == reversed ? 'YES' : 'NO');
*/

/*
//2
let text = prompt();
let result = text.split("").sort().join("");

console.log(result);
*/

/*
//3
let text = prompt().split(/\s+/);
let result = text.filter(word => ((word.match(/[aAаА]/g) || []).length <= 1));

console.log(result.reduce((best, word) => best == null || word.length < best.length ? word : best, null));
*/

/*
//4
let text = prompt();
let regex = /^(25[0-5]|2[0-4]\d|[01]?\d\d?)(\.(25[0-5]|2[0-4]\d|[01]?\d\d?)){3}$/;

console.log(regex.test(text) ? 'YES' : 'NO');
*/

/*
//5
let text = prompt().split('-');
console.log(`Уважаемый ${text[0]}, приглашаем вас на встречу в ${text[1]} в ${text[2]}`);
*/