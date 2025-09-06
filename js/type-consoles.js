/* Practice types of consoles */

/* Log, Warn and Error */
const receiveNumber = (num = 1) => {
  if (num > 0) console.log(num);
  else if (num === 0) console.warn(num);
  else console.error(num);
};

receiveNumber(3);
receiveNumber(0);
receiveNumber(-10);

/* Table */
/* Useful for objects, arrays and arrays of objects */

const users = [
  {
    id: crypto.randomUUID(),
    name: "Calet Devia",
    age: "23",
  },
  {
    id: crypto.randomUUID(),
    name: "Ronald Devia",
    age: "20",
  },
  {
    id: crypto.randomUUID(),
    name: "Jeferson Bermudez",
    age: "20",
  },
];

console.table(users);

const greeting = { number1: "Hi", number2: "Hello", number3: "Yo!" };

console.table(greeting);

const fruits = ["🍎", "🍊", "🍐"];

console.table(fruits);

/* Group and GroupEnd */
/* Organized your Logs, Tables, etc in Groups */

console.group("Vegetables");
console.log("Potato");
console.log("Tomato");
console.log("Corn");
console.groupEnd();
console.group("Fruits");
console.log("Guava");
console.log("Tangerine");
console.log("Pear");
console.groupEnd();
console.log("End of the line");

/* Count */
/* Is to count count the number of the function was call */
const login = (user = "Guest") => {
  console.warn("Account Joined!");

  console.group("Count");
  console.count(user);
  console.count();
  console.groupEnd();
};

login();
login("Calet");
login("Calet");
login("Ronald");
login("Jeferson");

/* Time and timeEnd */
/* To measure the time in a specific block of code */
console.time("Loop");

for (let i = 0; i < 1000000; i++) {
  /* Something */
}

console.log("µ");

console.timeEnd("Loop");

/* Assert */
/* Print a error if the condition is false */

const ageVerification = (age = 18) => {
  console.assert(age >= 18, `Error: invalid age ${age}`);
};

ageVerification(12);
ageVerification(23);
