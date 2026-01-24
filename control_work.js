// Level 1

/*
//1
let first = Number(prompt());
let second = Number(prompt());

console.log(first * second);
*/

/*
//2
let numbersArray = prompt().split(" ").map(n => parseInt(n));

if (numbersArray[0] * numbersArray[1] >= numbersArray[2])
    console.log('YES');
else
    console.log('NO');
*/

/*
//3
let number = Number(prompt());
console.log(Number.isInteger(Math.log2(number)) == true ? 'YES' : 'NO');
*/

/*
//4
let first = Number(prompt());
let second = Number(prompt());
let third = Number(prompt());

console.log(second ** 2 - 4 * first * third);
*/

/*
//5
let a = Number(prompt());
let b = Number(prompt());
let c = Number(prompt());
let d = Number(prompt());

if (c >= a && c <= b && d >= a && d <= b) {
    console.log(c);
    console.log(d);
}
else if (c >= a && c <= b && (d <= a || d >= b))
    console.log(c);
else if ((c <= a || c >= b) && d >= a && d <= b)
    console.log(d);
else
    console.log();
*/

// Level 2

/*
//1
let number = Number(prompt());
console.log(number == 1 ? 0 : Math.floor(number / 2 + number % 2));
*/

/*
//2
let numbersArray = prompt().split(" ").map(Number);
let average = 0;

for (let i = 0; i < numbersArray.length; i++) {
    average += numbersArray[i];
}

average /= numbersArray.length;

for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > average)
        console.log(i);
}
*/

/*
//3
let number = Number(prompt());
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 1; i <= number; i++) {
    array.forEach(function multiply(element) {
        console.log(i, "'*'", element, "'='", i * element);
    });

    if (number != 1)
        console.log("");
}
*/

/*
//4
let numbersArray = prompt().split(" ").map(Number);

for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] <= 1)
        continue;

    else if (numbersArray[i] == 2) {
        console.log(i);
        continue;
    }

    else if (numbersArray[i] % 2 == 0)
        continue;

    else {
        let flag = true;
        let middle = Math.trunc(Math.sqrt(numbersArray[i]));

        for (let j = 3; j <= middle; j += 2)
            if (numbersArray[i] % j == 0) {
                flag = false;
                break;
            }

        if (flag)
            console.log(i);
    }
}
*/

/*
//5
let text = prompt().split(" ");
console.log(text[text.length - 1].length);
*/

// Level 3

/*
//1
let number = Number(prompt());
let fibonacci = [];

for (let i = 0; i <= number; i++) {
    if (i == 0 || i == 1)
        fibonacci.push(i);
    else
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}

const valueToRemove = 0;
let fixedFibonacci = fibonacci.filter(function (item) {
    return item !== valueToRemove && item % 2 !== 0;
})

console.log(fixedFibonacci);
*/

/*
//2
function solve(a, b, c) {
    let discriminant = b ** 2 - 4 * a * c;
    if (discriminant > 0) {
        let result = [];
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        result.push(x1);
        result.push(x2);
        result.sort((x, y) => x - y);

        console.log(result.join(' '));
    }

    else if (a == 0 && b == 0)
        console.log(-1);

    else if (discriminant == 0)
        console.log((-b + Math.sqrt(discriminant)) / (2 * a));

    else
        console.log(-1);
}

let numbersArray = prompt().split(' ').map(Number);
solve(numbersArray[0], numbersArray[1], numbersArray[2]);
*/

/*
//3
let x1 = Number(prompt());
let y1 = Number(prompt());
let x2 = Number(prompt());
let y2 = Number(prompt());

let isInside = x1 >= 1 && x1 <= 8 &&
    y1 >= 1 && y1 <= 8 &&
    x2 >= 1 && x2 <= 8 &&
    y2 >= 1 && y2 <= 8;

let dx = Math.abs(x1 - x2);
let dy = Math.abs(y1 - y2);

console.log((dx == 1 && dy == 2) || (dx == 2 && dy == 1) && isInside ? 'YES' : 'NO');
*/

/*
//4
function find_closest(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (Math.abs(array[i] - number) == 1)
            return i;
    }
}
*/

//5
let numbersArray = prompt().split( ' ').map(Number);
let result = [];
let middle = [];

for (let i = 0; i < numbersArray.length; i++) {
    middle.push(numbersArray[i]);

    if (i == numbersArray.length - 1 || numbersArray[i] > numbersArray[i + 1]) {
        result.push([...middle]);
        middle = [];
    }
}

console.log(result.reduce((a, b) => a.length > b.length ? a : b));
