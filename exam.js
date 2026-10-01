// SET    B

const students = [
    { id: 1, name: "Alice", age: 22, grade: "A", enrolled: true },
    { id: 2, name: "Bob", age: 24, grade: "B", enrolled: false },
    { id: 3, name: "Charlie", age: 21, grade: "A", enrolled: true },
    { id: 4, name: "David", age: 23, grade: "C", enrolled: true },
    { id: 5, name: "Eva", age: 25, grade: "B", enrolled: false }
];

// Questions:

// 1.Print all student names.

students.forEach(a=>console.log(a.name))

console.log(`===================================`);


// 2.Print all students who are currently enrolled.

students.filter(a=>a.enrolled==true).forEach(a=>console.log(a.name))
console.log(`===================================`);

// 3.Find the grade of the student with the name "David".

let student=students.find(a => a.name == "David");
console.log(student.grade);
console.log(`===================================`);

// 4.Create a function to add a new student to the list.

function add(std) {
    students.push(std);
}
add({
    id:6,
    name:"nabhan",
    age:23,
    grade:"f",
    enrolled:true
});
console.log(students);
console.log(`===================================`);

// 5.Write a function to remove a student by their ID.

function removestd(id) {

    let index = students.findIndex(a => a.id == id);

    if (index >= 0) {
        students.splice(index, 1);
    }
}

removestd(6);
console.log(students);
console.log(`===================================`);

// 6.Write a function to update the enrollment status of a student.

function update(id, enroll) {

    let student = students.find(a => a.id == id);

    if (student>=0) {
        student.enrolled = enroll;
    }

}

update(2, true);

console.log(students);
console.log(`===================================`);

// 7.List all students whose grade is "A".

students.filter(a=>a.grade=="A").forEach(a=>console.log(a.name))
console.log(`===================================`);

// 8.Calculate the average age of all enrolled students.

function averageAgeEnrolled() {

    let totalAge = 0;
    let count = 0;

    students.forEach(student => {
    if (student.enrolled === true) {
        totalAge += student.age;
        count++;
    }
    });
    return totalAge / count;
}
console.log(averageAgeEnrolled());
console.log(`===================================`);


const devices = [
    {
        id: 1, 
        name: "iPhone 14", 
        brand: "Apple", 
        price: 999, 
        inStock: 'yes', 
        features: {
            storage: "128GB", 
            batteryLife: "20"
        }
    },
    {
        id: 2, 
        name: "Galaxy S21", 
        brand: "Samsung", 
        price: 799, 
        inStock: 'No', 
        features: {
            storage: "256GB", 
            batteryLife: "22 "
        }
    },
    {
        id: 3, 
        name: "Pixel 7", 
        brand: "Google", 
        price: 599, 
        inStock: 'yes', 
        features: {
            storage: "128GB", 
            batteryLife: "24 "
        }
    },
    {
        id: 4, 
        name: "Surface Laptop 4", 
        brand: "Microsoft", 
        price: 1499, 
        inStock: 'yes', 
        features: {
            storage: "512GB", 
            batteryLife: "15 "
        }
    },
    {
        id: 5, 
        name: "MacBook Air", 
        brand: "Apple", 
        price: 999, 
        inStock: 'No', 
        features: {
            storage: "256GB", 
            batteryLife: "18 "
        }
    }
];

// 1.Print all device names.

devices.forEach(a=>console.log(a.name))
console.log(`===================================`);

// 2.Print all device names whose price is greater than $800.

devices.filter(a => a.price>800).forEach(a=>console.log(`${a.name} ${a.price}`)
)
console.log(`===================================`);

// 3.Print out-of-stock devices.


devices.filter(a =>a.inStock=='No').forEach(a=>console.log(`${a.name} out of stock`))
console.log(`===================================`);

// 4.Find the device names with battery life greater than 20 hours.

devices.filter(a =>a.features.batteryLife>"20").forEach(a=>console.log(`${a.name} ${a.features.batteryLife}`))
console.log(`===================================`);

// 5.Calculate the total revenue generated when all available devices are sold out.

let sum = 0;
devices.filter(a =>a.inStock=='yes').forEach(a=>sum+=a.price)
console.log(sum);
console.log(`===================================`);

// 3. Print the Fibonacci series using recursion
