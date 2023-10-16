function lifeInWeeks(age) {
  var countDay = (90 - age) * 365;
  var countWeek = (90 - age) * 52;
  var countMonth = (90 - age) * 12;
  console.log('You have ' + countDay + ' days, ' + countWeek + ' weeks, ' + countMonth + ' months left.');
}

lifeInWeeks(22);

// ------------------------------------------

function lifeInWeeks(age) {
  var yearsRemaining = 90 - age;
  var countDay = yearsRemaining * 365;
  var countWeek = yearsRemaining * 52;
  var countMonth = yearsRemaining * 12;
  console.log('You have ' + countDay + ' days, ' + countWeek + ' weeks, ' + countMonth + ' months left.');
}

lifeInWeeks(22);
