function getMilk(money, costPerBottle) {
  //
  console.log('buy ' + calcBottles(money, costPerBottle) + ' bottles of milk');

  return calChange(money, costPerBottle);
}

function calcBottles(startingMoney, costPerBottle) {
  //
  var numberOfBottles = Math.floor(startingMoney / costPerBottle);

  return numberOfBottles;
}

function calChange(startingAmount, costPerBottle) {
  //
  var change = startingAmount % costPerBottle;

  return change;
}

console.log('Hello master, here is your ' + getMilk(10, 3) + ' change');
