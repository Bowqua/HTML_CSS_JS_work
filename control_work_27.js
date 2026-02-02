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

// Level 3

/*
//1
function isPowerOfTwo(num){
    return num > 0 && (num & (num - 1)) == 0 ? 1 : 0;
}
*/

/*
//2
function longestCommonSubstring(words) {
    let shortest = words.reduce((a, b) => a.length <= b.length ? a : b);

    for (let length = shortest.length; length > 0; length--)
        for (let i = 0; i <= shortest.length - length; i++) {
            let substring = shortest.slice(i, i + length);

            if (words.every(word => word.includes(substring)))
                return substring;
        }

    return '';
}

console.log(longestCommonSubstring(prompt().split(" ")));
*/

/*
//3
function findAnagrams(words) {
    let anagrams = new Map();

    for (let word of words) {
        let key = word.split('').sort().join('');

        if (!anagrams.has(key))
            anagrams.set(key, []);

        anagrams.get(key).push(word);
    }

    for (let anagram of anagrams.values()) {
        if (anagram.length > 1)
            console.log(anagram);
    }
}

findAnagrams(prompt().split(" "));
*/

/*
//4
function wordsWithOnlyLetters(words) {
    let regex = /[^a-zA-Z]/;
    let result = [];

    for (let word of words)
        if (!regex.test(word))
            result.push(word);

    return result;
}
*/

/*
//5
function mostCommonWord(words) {
    let frequency = new Map();
    let count = 0;
    let commonWord = null;

    for (let word of words) {
        let value = (frequency.get(word) || 0) + 1;
        frequency.set(word, value);

        if (value > count) {
            count = value;
            commonWord = word;
        }
    }

    return commonWord;
}
*/