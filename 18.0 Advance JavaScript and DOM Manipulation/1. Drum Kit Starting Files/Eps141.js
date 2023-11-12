var houseKeeper1 = {
  name: 'Angela Yu',
  age: 23,
  hasWorkPermit: true,
  languages: ['English', 'Mandarin'],
  yearsOfExperience: 12,
};

function HouseKeeper(name, age, hasWorkPermit, languages, yearsOfExperience) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.yearsOfExperience = yearsOfExperience;
}

var houseKeeper2 = new HouseKeeper('Yu', 23, false, ['English'], 10);
console.log(houseKeeper2.name);
