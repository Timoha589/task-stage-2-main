const firstName = 'Иван';
const lastName = 'Иванов';
const middleName = 'Иванович';
const birthYear = 1990;
const direction = 'Программирование';

const result1 = 'firstName: ' + firstName + '\n' +
'lastName: ' + lastName + '\n' +
'patronymic: ' + middleName + '\n' +
'yearOfBirth: ' + birthYear + '\n' +
'profile: ' + direction;

console.log(result1);

const result2 = `firstName: ${firstName}
lastName: ${lastName}
patronymic: ${middleName}
yearOfBirth: ${birthYear}
profile: ${direction}`;

console.log(result2);
