/*const challenge = "30 Days of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 2));
console.log(challenge.substring(2, 21));
console.log(challenge.includes('Script'));
console.log(challenge.split(''));
console.log(challenge.split(' '));

const companies = 'Facebook Google Microsoft Apple IBM Oracle Amazon';
console.log(companies.split(' '))

console.log(challenge.replace('JavaScript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));*/

const because = 'You cannot end a sentence with because because because is a conjunction';
/*console.log(because.lastIndexOf('because'));
console.log(because.search('because'));
console.log(because.trim());

console.log(challenge.startsWith('3'));
console.log(challenge.endsWith('t'));
console.log(challenge.match('a'));

const challenge_1 = '30 Days Of ';*/
const challenge_2 = 'JavaScript';
//console.log(challenge_1.concat(challenge_2));

//console.log(challenge.repeat(2));

//Exercise 2

console.log('There is no exercise better for the heart than reaching down and lifting people up.');
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
let ten = '10';
console.log(typeof(ten));
let numTen = Number(ten);
console.log(numTen);
let floatNum = '9.8';
let newFloatNum = parseFloat(floatNum);
console.log(Math.ceil(newFloatNum));

const py = 'python';
const jar = 'jargon';
console.log(py.includes('on') === jar.includes('on'));
let jarSentence = 'I hope this course is not full of jargon';
console.log(jarSentence.includes('I hope this course is not full of jargon'));
console.log(Math.floor(Math.random() * 100));
console.log(Math.floor(Math.random() * 50) + 50);
console.log(Math.ceil(Math.random() * 255));

console.log(challenge_2.charAt(Math.floor(Math.random() * 10)));
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');
console.log(because.substring(31, 55));


//Level 3 Exercises

let loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(loveSentence.match('love'));
let pattern = /because/gi;
console.log(because.match(pattern));

const badSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let newPattern = /[\$\%\@\;\&\#]/gi
console.log(badSentence.replace(newPattern, ''));

let income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
monthlySalary = Number(income.substring(9,13));
onlineMonthlySalary = Number(income.substring(67,72));
annualBonus = Number(income.substring(42,47));
console.log((monthlySalary + onlineMonthlySalary) * 12 + annualBonus);