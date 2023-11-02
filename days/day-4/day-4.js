
//Exercise Level 1

//let userAge = prompt("Enter your age: ");
let userAge = 17;
yearsUntilOfAge = 18 - userAge;
if (userAge >= 18) {
    console.log('You are old enough to drive.')
} else {
    console.log(`You must wait ${yearsUntilOfAge} year to drive.`)
};

let myAge = 23;
let yourAge = 47;
if (myAge > yourAge) {
    console.log(`You are ${myAge - yourAge} years older.`)
} else {
    console.log(`They are ${yourAge - myAge} years older.`)
};

let a = 4
let b = 3
if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${a} is less than ${b}`)
};

(a > b) ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`);

function isEven(oddEvenNum) {
    if (0 === oddEvenNum % 2) {
        console.log(`${oddEvenNum} is an even number.`)
    } else {
        console.log(`${oddEvenNum} is an odd number.`)
    }
};
isEven(199);

//Exercises Level 2
function studentGrade(score) {
    if (score >= 90) {
        console.log('Your grade is an A')
    } else if (score >= 80) {
        console.log('Your grade is a B')
    } else if (score >=70) {
        console.log('Your grade is a C')
    } else if (score >=60) {
        console.log('Your grade is a D')
    } else if (score <=59) {
        console.log('Your grade is an F')
    }
};
studentGrade(58);

const now = new Date();

function getWorkDay(day) {
    if (day = 'Monday') {
        console.log('Today is a work day.');
    } else if (day = 'Tuesday') {
        console.log('Today is a work day.');
    } else if (day = 'Wednesday') {
        console.log('Today is a work day.');
    } else if (day = 'Thursday') {
        console.log('Today is a work day.');
    } else if (day = 'Friday') {
        console.log('Today is a work day.');
    } else if (day = 'Saturday') {
        console.log('Today is not a work day.');
    } else if (day = 'Sunday') {
        console.log('Today is not a work day.');
    } else {
        console.log('Type a valid day');
    }
};
getWorkDay('Saturday');

//Exercises Level 3

const [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec] = [31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];
function returnDaysOfMonth(month) {
    if (month === feb) {
        console.log(`Feburary of this year is Leap year and has 29 days. The next Leap year is in 4 years.`)
    } else {
        console.log(`That month has ${month} days.`)
    }
};
returnDaysOfMonth(feb);
