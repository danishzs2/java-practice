// PUSH

const fruits = ["Apple", "Banana"];
fruits.push("Mango", "Orange");
console.log(fruits);

// POP

const tasks = ["Login", "Dashboard", "Logout"];
let remove = tasks.pop();
console.log(tasks);
console.log(remove);

// unshift / shift

let queue = [`Student B`, `Student C`];
queue.unshift("Student A");
console.log(queue);
queue.shift();
console.log(queue);

// Slice = Slice basically copys the array and extract from it and can make a new array with it and no it doesnt not change the orginal array

const topics = ["HTML", "CSS", "JS", "React", "Node"];
const changed = topics.slice(1, 4);
console.log(topics);
console.log(changed);

// splice = splice basically changes the orginal value in arrays as in can insert remove and replace it

const technologies = ["HTML", "CSS", "JQUERY", "REACT"];
technologies.splice(2, 1);
console.log(technologies);

// includes

let obj = {
  emails: ["das@gmail", "pol@gmail"],
};

console.log(obj.emails.includes("das@gmail"));

// indexof()

let given = ["Karachi", "Lahore", "Islamabad", "Karachi"];

console.log(given.indexOf("Karachi"));
console.log(given.indexOf("pindi"));

// map

let prices = [1000, 2500, 800, 1500];

let Product = prices.map((price) => price * 1.1);
console.log(Product);

const students = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
];

const fullNames = students.map(
  (student) => `${student.firstName} ${student.lastName}`,
);

console.log(fullNames);

// filter

const marks = [35, 76, 49, 90, 50, 20];
const passingMarks = marks.filter((mark) => mark >= 50);

console.log(passingMarks);

// map + filter
//
const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 15 },
  { name: "Dana", age: 19 },
];

const adultNames = users
  .filter((user) => user.age >= 18)
  .map((user) => user.name);

console.log(adultNames);

// Find

const userrs = [
  { id: 101, name: "Alice", age: 19 },
  { id: 102, name: "Bob", age: 19 },
  { id: 103, name: "Charlie", age: 12 },
];

const user = userrs.find((u) => u.id === 103);

console.log(user);

// and if user not found

const notFound = userrs.find((u) => u.id === 999);
console.log(notFound);

// find vs filter

// find returns the first matching element itself or undefined ig
// filter returns an array of all matching elements

console.log(userrs.find((u) => u.id === 103)); // returns single object
console.log(userrs.filter((u) => u.age >= 18)); //returns array

// reduce

const pricess = [1200, 350, 999, 450];
const total = pricess.reduce((acc, price) => acc + price, 0);

console.log(total);

const techs = ["JS", "React", "JS", "Node", "React", "JS"];

const count = techs.reduce((acc, tech) => {
  acc[tech] = (acc[tech] || 0) + 1;
  return acc;
}, {});

console.log(count);

// sort

const nums = [25, 3, 100, 12, 8];
nums.sort((a, b) => a - b);

console.log(nums);

// q18
// sort changes the array in place and it doesnt make a copy thats why using sort
//  isnt good for a react state because it changes the whole array plus rreact wont know
// anything happened because it checks if the array is new object and fix is to just to copy it and then sort the copy

// some

const quantities = [5, 0, 7, 2];
const hasOutOfStock = quantities.some((qty) => qty === 0);

console.log(hasOutOfStock);

// every + some

const markks = [92, 95, 88, 90];

const allPassed = markks.every((m) => m >= 50);
const anyAbove90 = markks.some((m) => m >= 90);
console.log(allPassed);
console.log(anyAbove90);
