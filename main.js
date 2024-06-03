// 1- Write a program that prints numbers from 1 to 10 using a for loop.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.

let numberseven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0)
        console.log(i)
}

//let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= 10; i += 2) {
    console.log(i)
}


// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.

let numbersodd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 1)
        console.log(i)
}

// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.

let number = parseInt(prompt("enter a number to print its multiplication table:"));
if (!isNaN(number)) {
    for (let i = 1; i <= 10; i++) {
        console.log(number + "x" + i + "=" + (number * i))


    }
}

// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.

let sum = 0
let i = 1
while (i <= 100) {
    sum += i; i++
}
console.log("the sum of number from 1 to 100 is:" + sum)

// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.
let number6 = prompt("enter the number");
let factorial = 1;

if (number6 < 0) {
    console.log("factorial is not defaind for negative numbers")
}
else {
    for (let i = 1; i <= number6; i++) { factorial *= i; }
    console.log("the factorial of ${number} is ${factorial}")
}


// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.

let maxNumber = prompt("Please enter a number:");

maxNumber = parseInt(maxNumber);

let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(n1);
console.log(n2);

nextTerm = n1 + n2;

while (nextTerm <= maxNumber) {
    console.log(nextTerm);
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}

// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.

let numberR = [5, 10, 15, 20];

let index = numberR.length - 1;
while (index >= 0) {
    console.log(numberR[index])
    index--;
}

