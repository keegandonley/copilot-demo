// Use the debugging brush here

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// There is a bug in this function, and it does not return the correct output.
// Let's see if copilot can find and fix the bug
function sumOfSquaresOfEven(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      continue;
    }
    if (arr[i] % 1 === 0) {
      let square = (function (num) {
        let squaredNumber = (function (a) {
          let result = 1;
          for (let count = 0; count < a; count++) {
            result *= num;
          }
          return result;
        })(2);
        return squaredNumber;
      })(arr[i]);
      sum += square;
    }
  }
  return sum;
}

console.log(sumOfSquaresOfEven(inputArray)); // 220
