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