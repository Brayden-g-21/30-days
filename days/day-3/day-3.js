//Exercises Level 1

//1
const firstName = 'Brayden';
const lastName = 'Gibson';
const country = 'USA';
const city = 'Tooele';
let age = 23;
const isMarried = false;
//2
const tenStr = '10';
console.log(tenStr === 10);
//3
console.log(parseInt('9.8') === 10);
//4.1
console.log(firstName.startsWith('B'));
console.log(age === 23);
console.log(lastName.includes('son'));
//4.2
console.log(lastName.endsWith('y'));
console.log(age === 546);
console.log(isMarried);
//5
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
const pyt = 'python';
const jar = 'jargon';
console.log(jar.length === (pyt.length + 1));
//6
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
const dragon = 'dragon';
const python = 'python'
console.log(dragon.includes('on') === python.includes('on'));
//7
const now = new Date()
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());

const oldDate = new Date(1970);
const yearsElapsed = now.getFullYear() - oldDate - 1;
const secondsElapsed = (yearsElapsed * 365.25 * 24 * 60 * 60) + (((now.getMonth() * 30 + now.getDate() - 1) * 24 + now.getHours()) * 60 + now.getMinutes()) * 60 + now.getSeconds();

console.log(secondsElapsed);

//Exercises Level 2

function triangleArea(base, height) {
    area = 0.5 * base * height;
    return area;
};
console.log(triangleArea(20, 10));

function trianglePerimeter(a, b, c) {
    perimeter = a + b + c;
    return perimeter;
};
console.log(trianglePerimeter(5, 4, 3))

function rectangleStats(width, height) {
    area = width * height;
    perimeter = (width + height) * 2;
    console.log(`Area = ${area}\nPerimeter = ${perimeter}`)
};
rectangleStats(5,6);

pi = 3.14

function circleArea(radius) {
    area = pi * radius * radius;
    console.log(`Area of the circle is: ${area}`);
};
circleArea(5);

function slope(xIntercept) {
    yIntercept = 2 * xIntercept - 2;
    console.log(`The slope is: ${yIntercept}`)
};
slope(4);

function workerPay(hours, pay) {
    weeklyPay = hours * pay;
    console.log(`Hours per week: ${hours}\nRate per hour: ${pay}\nWeekly pay: ${weeklyPay}`);
};
workerPay(41, 23);

if (firstName.length >= 7) {
    console.log('Your name is long!')
} else {
    console.log('Your name is short...')
};

if (firstName.length === lastName.length) {
    console.log('Your first and last names have the same amount of letters');
} else if (firstName.length != lastName.length) {
    console.log('Your first and last name have different numbers of letters');
};

const yourAge = 87;
const myAge = 23;
let yearsOlder = yourAge - myAge;
console.log(`You are ${yearsOlder} years older than me.`);

function isOfAge(yearBorn) {
    driverAge = now.getFullYear() - yearBorn;
    yearsToWait = 18 - driverAge;
    if (driverAge >= 18) {
        console.log('You are old enough to drive!');
    } else {
        console.log(`You must wait another ${yearsToWait} to drive.`);
    }
};

isOfAge(2011);

function secondsToLive(expectedAge) {
    secondsOfLife = expectedAge * 365.25 * 24 * 60 * 60;
    console.log(`You expect to live: ${expectedAge} years\nYou will live: ${secondsOfLife} seconds`)
};
secondsToLive(80);

console.log(now.toLocaleDateString() + ' - ' + now.toLocaleTimeString());

//Exercises Level 3

console.log(`${now.getHours()}:${now.getMinutes()}`)