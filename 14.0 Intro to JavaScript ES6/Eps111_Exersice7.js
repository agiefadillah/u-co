function fibonacciGenerator(n) {
  var fibonacciCode = [];

  if (n === 1) {
    fibonacciCode.push(n - 1);
  } else if (n === 2) {
    fibonacciCode.push(n - 2, n - 1);
  } else {
    fibonacciCode = [0, 1];

    while (fibonacciCode.length < n) {
      fibonacciCode.push(fibonacciCode[fibonacciCode.length - 1] + fibonacciCode[fibonacciCode.length - 2]);
    }
  }
  return fibonacciCode;
}
