function HouseKeeper(name, age, hasWorkPermit, languages, yearsOfExperience) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.yearsOfExperience = yearsOfExperience;
  this.moveForClean = function () {
    alert('Okay!');
    pickUpSapu();
    move;
  };
}

var houseKeeper1 = new HouseKeeper('Yu', 23, true, ['English'], 10);
houseKeeper1.moveForClean();
