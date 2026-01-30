/*
//1
let first = Number(prompt());
let second = Number(prompt());

try {
    console.log(first / second);
}

catch (error) {
    console.log(error.message);
}
*/

/*
//2
let number = prompt();

if (Number.isNaN(Number(number)))
    console.log('Некорректные данные!');
else
    console.log(Number(number) ** 2);
*/

/*
//3
let number = Number(prompt());

function checkHundred(digits) {
    if (digits + 30 > 100) {
        throw new Error('Число превышает 100');
    }

    return digits + 30;
}

try {
    console.log(checkHundred(number));
}

catch (error) {
    console.log(error.message);
    console.log(100);
}
*/