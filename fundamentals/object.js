// Reference data types: arrays, objects, functions 

// object = standalone entity, with properties and types
// syntax: 
//      let object1 = {};

let animal = {
    type: 'bear',
    color: 'brown',
    lives: 'den',
    age: 3
};

// how to access only the age of the animal (object) = 
// objectname.propertyname (dot notation) OR 
// objectname['propertyname']

console.log(animal.lives);
console.log(animal.type);
console.log(animal.color);
console.log(animal.age);

let alex = {
    age: 27,
    eyeColor: 'blue',
    occupation: 'web developer',
    hobbies: ['travel', 'diving', 'exercising']
};

console.log(alex.age);
console.log(alex.eyeColor);
console.log(alex.occupation);
console.log(alex.hobbies[0]);
console.log(alex['age']);
console.log(alex.hobbies[1]);
console.log(alex.hobbies[2]);