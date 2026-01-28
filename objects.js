// What are objects?

/*
//1
let book = {
    author: "Someone",
    price: 0,
    amount: 0,
    get_total() {
        return this.price * this.amount;
    }
};
*/

// How are objects created?

/*
//1
function Car(speed, name, wheels) {
    this.speed = speed;
    this.name = name;
    this.wheels = wheels;
}
*/

/*
//2
function Person(name) {
    this.name = name,
        this.say_hi = function() {
            console.log(`Привет, ${this.name}`);
        };
}
*/

// String objects

/*
//1
let number = Number(prompt());
for (let i = 0; i < number; i++) {
    let text = prompt();
    console.log(text.toLowerCase().includes('кот') ? 1 : -1);
}
*/

/*
//2
let numbersString = prompt();
let max = 0;
let middle = 0;

for (let letter of numbersString) {
    if (letter == '0')
        middle++;
    else {
        if (middle > max) {
            max = middle;
            middle = 0;
        }
        else
            middle = 0;
    }
}

console.log(max);
*/

/*
//3
let text = prompt();
let first = text.indexOf('1');
let second = text.indexOf('1', first + 1);

if (text.startsWith('1'))
    console.log(text.slice(first + 1, second));
else
    console.log(text.slice(0, first));
*/

/*
//4
let word = prompt();
let result = '';

for (let i = 0; i < word.length; i++) {
    if (i % 2 == 0)
        result += word[i].toLowerCase();
    else
        result += word[i].toUpperCase();
}

console.log(result);
*/

/*
//5
let text = prompt();
console.log(text.slice(0, 5));
*/

// Math functions

/*
//1
let a = Number(prompt());
let b = Number(prompt());
let c = Number(prompt());
let p = (a + b + c) / 2;

console.log(Math.round(Math.sqrt(p * (p - a) * (p - b) * (p - c))));
*/

/*
//2
let x1 = Number(prompt());
let y1 = Number(prompt());
let x2 = Number(prompt());
let y2 = Number(prompt());

console.log(Math.round(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)));
*/

/*
//3
let radius = Number(prompt());
console.log(Math.round(Math.PI * radius ** 2));
*/

// Date & Time

/*
//1
let year = Number(prompt());
let month = Number(prompt())-1;
let day = Number(prompt());

const cur = new Date(year, month, day);
const nextYear = new Date(year + 1, 0, 1);

console.log(Math.floor((nextYear - cur) / (1000 * 60 * 60 * 24)));
*/

/*
//2
let year = Number(prompt());
let month = Number(prompt()) - 1;
let day = Number(prompt());

const cur = new Date(year, month, day);
const nextMonth = new Date(year, month + 1, 1, 0, 0, 0);

console.log(Math.floor((nextMonth - cur) / (1000 * 60 * 60 * 24)));
*/