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

