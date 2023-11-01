const challenge = "30 Days of JavaScript";
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
console.log(challenge.lastIndexOf('a'));

const because = 'You cannot end a sentence with because because because is a conjunction';
console.log(because.lastIndexOf('because'));
console.log(because.search('because'));
console.log(because.trim());

console.log(challenge.startsWith('3'));
console.log(challenge.endsWith('t'));
console.log(challenge.match('a'));

const challenge_1 = '30 Days Of ';
const challenge_2 = 'JavaScript';
console.log(challenge_1.concat(challenge_2));

console.log(challenge.repeat(2));
