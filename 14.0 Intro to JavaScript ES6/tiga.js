var myName = 'Angela';
myName.slice(0, 3);

function getMilk() {
  console.log('enterHouse');
  console.log('moveLeft');
}

getMilk();

// --------------------------------------------

function main() {
  moveFourTimes();
  turnLeft();
  moveFourTimes();
}

function moveFourTimes() {
  move();
  move();
  move();
  move();
}

// --------------------------------------------
// stanford.edu/~cpiech/karel/ide.html

function main() {
  putBeeper();
  diagonalMoveAndBeeper();
  diagonalMoveAndBeeper();
  diagonalMoveAndBeeper();
  diagonalMoveAndBeeper();
}

function diagonalMoveAndBeeper() {
  move();
  turnLeft();
  move();
  putBeeper();
  turnRight();
}

function main() {
  putBeeper();
  satu();
  putBeeper();
  satu();
  putBeeper();
  belokKiri();
  putBeeper();
  satu();
  putBeeper();
}

function satu() {
  move();
  move();
}

function belokKiri() {
  turnLeft();
  move();
  turnLeft();
  move();
}

// --------------------------------------------
function main() {
  beepersRight();
  goUpTurnLeft();
  beepersLeft();
  goUpTurnRight();
  beepersRight();
  goUpTurnLeft();
  beepersLeft();
  goUpTurnRight();
  beepersRight();
}

function goUpTurnRight() {
  turnRight();
  move();
  turnRight();
}

function goUpTurnLeft() {
  turnLeft();
  move();
  turnLeft();
}

function beepersRight() {
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
}

function beepersLeft() {
  move();
  putBeeper();
  move();
  move();
  putBeeper();
  move();
}
