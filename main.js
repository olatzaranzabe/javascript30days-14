'use strict';

// start with strings, numbers and booleans
let age = 100;

let age2 = age;

console.log(age, age2);
// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;

console.log(players, team);

// You might think we can just do something like this:
// team[3] = 'Lux';

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
const team3 = players.slice(2, 3);

console.log(team2);

console.log(team3);

const team5 = Array.from(players);
console.log(team5);
team5[3] = 'wesbos';
console.log(team5);
// one way

// or create a new array and concat the old one in

// or use the new ES6 Spread
const team4 = [...players];
console.log(team4)
team4[3] = 'Oli';

console.log(team4);
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
// const captain = person;
// captain.number = 99;
// console.log(captain)
// console.log(person);

// how do we take a copy instead?
const newCaptain = Object.assign({}, person, { number: 100 })
console.log(newCaptain);
// We will hopefully soon see the object ...spread
const person3 = { ...person };
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const me = {
    name: 'oli',
    age: 24
};

console.log(me);

const dev = Object.assign({}, wes);

console.log(me)