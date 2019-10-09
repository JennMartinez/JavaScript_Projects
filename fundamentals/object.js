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
