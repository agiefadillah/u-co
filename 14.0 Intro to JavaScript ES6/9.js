function getMilk(startingMoney, costPerBottle) {
  //
  var numberOfBottles = Math.floor(startingMoney / costPerBottle);

  return numberOfBottles;
}

// var bmi = bmiCalculator(65, 1.8);
console.log('Hello master, here is your ' + getMilk(65, 1.8) + ' change');
