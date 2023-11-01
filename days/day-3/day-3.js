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