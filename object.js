// Create an object student with properties name, age, and grade Print each property.

let student = {
    name: "Danish",
    age: 18,
    grade: "A"
};

console.log(student.name);
console.log(student.age);
console.log(student.grade);


// Write a program to loop through all keys and values of an object using for...in.

for (let key in student) {
    console.log(key, student[key]);
}


// Create an object calculator with methods add, subtract, multiply, and divide Demonstrate usage.

let calculator = {
    add: function(a, b) {
        return a + b;
    },

    subtract: function(a, b) {
        return a - b;
    },

    multiply: function(a, b) {
        return a * b;
    },

    divide: function(a, b) {
        return a / b;
    }
};

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));



// Write a program to access values inside a nested object (e.g., student.address.city).

let student2 = {
    name: "Danish",
    age: 18,

    address: {
        city: "Karachi",
        country: "Pakistan"
    }
};

console.log(student2.address.city);
console.log(student2.address.country);



// Convert an object's keys and values into separate arrays.

let keys = [];
let values = [];

for (let key in student) {
    keys.push(key);
    values.push(student[key]);
}

console.log(keys);
console.log(values);