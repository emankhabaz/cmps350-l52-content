let names = new Set();
names.add('Samir');
names.add('Fatima');
names.add('Mariam');
names.add('Ahmed');
names.add('Samir'); // won't be added

// Or - // Samir won't be added
names = new Set(['Samir', 'Fatima', 'Mariam', 'Ahmed', 'Samir']); 

for (const name of names) {
    console.log(name);
}

const namesArray = Array.from(names);
console.log("numbersArray:", namesArray);