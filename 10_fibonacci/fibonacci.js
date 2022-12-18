const fibonacci = function (nthNumber) {
  if (nthNumber.toString().includes("-")) {
    return "OOPS";
  }

  nthNumber = parseInt(nthNumber);

  let fibonacciSequence = 1;
  let CurrentNum = 1;
  let PreviousNum = 0;

  for (let i = 0; i < nthNumber; i++) {
    //
    if (i === 0) {
      fibonacciSequence = 1;
      continue;
    }
    fibonacciSequence = CurrentNum + PreviousNum;
    PreviousNum = CurrentNum;
    CurrentNum = fibonacciSequence;
  }
  return fibonacciSequence;
};

// Do not edit below this line
module.exports = fibonacci;
