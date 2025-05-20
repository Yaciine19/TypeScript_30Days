type Inventor = {
  first: string, 
  last: string,
  year: number,
  passed: number
}

const names: string[] = [
  "Adam", "Sophie", "Lina", "Karim", "Nour", "Amine", "Sarah", "Omar", "Aya", "Rania",
  "Youssef", "Jana", "Mounir", "Dalia", "Hassan", "Leila", "Tariq", "Imane", "Rachid", "Malak",
  "Khaled", "Salma", "Bilal", "Nadia", "Anis", "Fatima", "Hamza", "Rita", "Ali", "Yasmina",
  "Samir", "Houda", "Ziad", "Lamia", "Mehdi", "Sana", "Badr", "Myriam", "Nabil", "Amina",
  "Walid", "Sara", "Fouad", "Meriem", "Ismail", "Nada", "Reda", "Kenza", "Hicham", "Soukaina"
];

const inventors: Inventor[] = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Nikola", last: "Tesla", year: 1856, passed: 1943 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Thomas", last: "Edison", year: 1847, passed: 1931 },
  { first: "James", last: "Watt", year: 1736, passed: 1819 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
];


// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventorsBornIn1500s: Inventor[] = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.table(inventorsBornIn1500s);

// Array.prototype.map()
// 2. Give us an array of the inventory first and last names
const inventoriesFullName: string[] = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(inventoriesFullName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.table(inventors.sort((a, b) => a.year - b.year));

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYears: number = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

// 5. Sort the inventors by years lived
console.table(inventors.sort((a, b) => (b.passed - b.year) - (a.passed - a.year)));

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. Sum up the instances of each of these
const data: string[] = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const resulta = data.reduce((obj: {[key: string]: number}, item: string) => {
    if(!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {} as {[key: string]: number});
console.log(resulta);