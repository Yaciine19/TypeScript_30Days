// Start with strings, numbers and booleans
// let age: number = 100;
// let age2: number = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);

// let Name: string = "Yacine";
// let name2: string = Name;
// console.log(Name, name2);
// Name = "Ahmed";
// console.log(Name, name2);

// Let's say we have an array
const players: string[] = ["Yacine", "Ahmed", "Mouhamed", "Ali"];

// And we want to make a copy of it.
// You might think we can just do something like this:
const team: string[] = players;
// console.log(players, team);

// However what happens when we update that array?
// team[3] = 'Fatima';
// console.log(players, team);

// Now here is the problem!

// We have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

const team2 = players.slice();
// console.log(team2, players);
// team2[3] = "Fatima";
// console.log(players, team2);

// Or use the new ES6 Spread
const team3: string[] = [...players];
// console.log(players, team3);
// team3[3] = "Fatima";
// console.log(players, team3);

const team4: string[] = Array.from(players);
// console.log(players, team4);
// team4[3] = "Fatima";
// console.log(players, team4);

// With Objects
type Person = {
  name: string;
  age: number;
  number?: number;
};

const person: Person = {
  name: "Ragueb Yacine",
  age: 20,
};

// And think we make a copy:
// const captin = person;
// captin.number = 30;
// console.log(person, captin);

// How do we take a copy instead?
const cap2 = Object.assign({}, person, { age: 30, number: 99 });
// console.log(person, cap2);

// We will hopefully soon see the object ...spread
const cap3 = { ...person, number: 30 };
// console.log(person, cap3);

// Things to note - this is only 1 level deep - both for arrays and objects.
// Think twice before using it.

type Wes = {
  name: string;
  age: number;
  social: {
    twitter: string;
    facebook: string;
  };
};

const wes: Wes = {
  name: "Wes",
  age: 100,
  social: {
    twitter: "@wesbos",
    facebook: "wesbos.developer",
  },
};

console.log(wes);

const dev = Object.assign({}, wes);
const dev2 = JSON.parse(JSON.stringify(wes));
