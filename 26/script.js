const number = new Number(500);
const string = new String("Hello");
const boolean = new Boolean(true);

console.dir(number);
console.dir(Number.prototype.__proto__);

console.dir(string);
console.dir(String.prototype.__proto__);

console.dir(boolean);
console.dir(Boolean.prototype.__proto__);