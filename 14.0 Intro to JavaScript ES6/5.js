function getMilk(money) {
  console.log('leaveHouse');
  console.log('moveRight');
  console.log('moveRight');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveRight');
  console.log('moveRight');

  var numberOfBottles = money / 1.5;
  console.log('buy' + numberOfBottles + 'bottles of milk');

  console.log('moveLeft');
  console.log('moveLeft');
  console.log('moveDown');
  console.log('moveDown');
  console.log('moveDown');
  console.log('moveDown');
  console.log('moveLeft');
  console.log('moveLeft');
  console.log('enterHouse');
}

//getMilk(12);
getMilk();

//-----------------------------------------

function getMilk(money) {
  console.log('leaveHouse');
  console.log('moveRight');
  console.log('moveRight');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveUp');
  console.log('moveRight');
  console.log('moveRight');

  var numberOfBottles = Math.floor(money / 1.5);
  console.log('buy' + numberOfBottles + 'bottles of milk');

  console.log('moveLeft');
  console.log('moveLeft');
  console.log('moveDown');
  console.log('moveDown');
  console.log('moveDown');
  console.log('moveDown');
  console.log('moveLeft');
  console.log('moveLeft');
  console.log('enterHouse');
}

//getMilk(12);
getMilk();

//-----------------------------------------
var numberOfBottles = money / 1.5;
console.log('buy' + numberOfBottles + 'bottles of milk');
// Output: 7.33

var numberOfBottles = Math.floor(money / 1.5);
console.log('buy' + numberOfBottles + 'bottles of milk');
// Output: 7
// Jadi si math floor itu ngitung langsung dapatnya berapa tanpa koma
