// Write a program to print all elements of an array using a for loop.

let numbers = [10, 20, 30, 40, 50];

for (let i of numbers) {
  console.log(i);
}

// How do you find the length of an array without using .length directly?

let count = 0;

for (let i of numbers) {
  count++;
}

console.log(count);

// Write a function to reverse an array without using .reverse().

function reverseArray(numbers) {
  let reversed = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    reversed.push(numbers[i]);
  }

  return reversed;
}

console.log(reverseArray(numbers));

// Calculate the sum of all numbers in an array.

let sum = 0;

for (let i of numbers) {
  sum = sum + i;
}

console.log(sum);

// Write a program to filter only even numbers from an array.

let even = [];

for (let i of numbers) {
  if (i % 2 == 0) {
    even.push(i);
  }
}

console.log(even);
