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
