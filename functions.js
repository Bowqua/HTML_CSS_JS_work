// What is a function?

/*
//1
function sum_res(a, b){
    res = a + b;
}
*/

/*
//2
function avg(arr){
    let middle = arr.reduce((a, b) => a + b, 0);
    let length = arr.length;
    return Math.round(middle / length);
}
*/

/*
//3
function mx(arr){
    return Math.max(...arr);
}
*/

// Function expression

/*
//1
let plus = (a, b) => {
    return a + b;
};
*/

// Callbacks

/*
//1
function filterNumbers(numbers, callback) {
    return numbers.filter(n => isEven(n));
}

function isEven(num) {
    return num % 2 === 0;
}
*/

// Returns

/*
//1
function delimiters(num){
    let middle = Math.sqrt(num);
    let array = [];

    for (let i = 1; i <= middle; i++) {
        if (num % i == 0) {
            array.push(i);

            if (i !== num / i)
                array.push(num / i);
        }
    }

    return array.sort((a, b) => a - b);
}
*/

/*
//2
function summ(a, b){
    let result = 0;

    for (let i = a; i <= b; i++)
        result += i;

    return result;
}
*/

/*
//3
function issimple(a){
    let flag = true;
    let middle = Math.trunc(Math.sqrt(a));

    for (let j = 3; j <= middle; j += 1) {
        if (a % j == 0) {
            flag = false;
            break;
        }
    }

    if (flag && a % 10 == 7)
        return 'YES';
    else
        return 'NO';
}
*/

/*
//4
function cap(s){
    let i = 0;
    let text = '';
    for (let letter of s)
        if (i == 0 && letter !== letter.toUpperCase()) {
            text += letter.toUpperCase();
            i++;
        }

        else if (i == 0 && letter == letter.toUpperCase()) {
            text += letter;
            i++;
        }

        else
            text += letter.toLowerCase();

    return text;
}
*/

/*
//5
function second_greatest(arr){
    let middle = arr.sort((a, b) => a - b);
    return middle[middle.length - 2];
}
*/

// Row functions

/*
//1
const pow = (a, b) => a ** b;
*/

/*
//2
let arrayNumbers = prompt().split(" ").map(Number);
let result = arrayNumbers.map(x => -x);

console.log(result);
*/

// Recursion

/*
//1
function summ(n){
    if (n == 1)
        return 1;
    return n + summ(n - 1);
}
*/

/*
//2
function rev(s){
    return s.split("").reverse().join("");
}
*/

/*
//3
function hello(n){
    if (n == 0)
        return;

    console.log('Hello');
    hello(n - 1);
}
*/

/*
//4
function pow1(a, b){
    if (b == 0)
        return 1;
    return a * pow1(a, b - 1);
}
*/

// Closure

/*
//1
function gen(phrase) {
    return function repeat(n) {
        while (n > 0) {
            console.log(phrase);
            n--;
        }
    }
}

let phrase = prompt();
let n = parseInt(prompt());
let rep = gen(phrase);
rep(n);
*/

/*
//2
function gen(num) {
    return function compare(n) {
        if (n > num)
            return 'YES';
        else
            return 'NO';
    }
}
*/

/*
//3
function gen(word){
    return function checkSubstring(secondWord) {
        return secondWord.includes(word) ? 'YES' : 'NO';
    }
}
*/