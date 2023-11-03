function isLeap(year) {
  /**************Don't change the code above****************/

  //Write your code here.

  if (year % 4 !== 0) {
    alert('Not leap year.');
    console.log(year + ' is not a leap year');
  }

  if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    console.log(year + ' is a leap year');
  }

  if (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) {
    console.log(year + ' is a leap year');
  }

  if (year % 4 === 0 && year % 100 !== 0 && year % 400 === 0) {
    console.log(year + ' is a leap year');
  }

  if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) {
    console.log(year + ' is not a leap year');
  }

  /**************Don't change the code below****************/
}

isLeap(1948);
