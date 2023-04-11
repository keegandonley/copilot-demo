// Use this file to have copilot write tests and explain code, and show some
// of the limitations when things get complex

function isEven(n: number) {
  return n % 2 === 0;
}

function isOdd(n: number) {
  return !isEven(n);
}

function isPrime(n: number) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function isPalindromeSentence(sentence: string) {
  const reversed = sentence.split("").reverse().join("");
  return sentence === reversed;
}

function infintePrecisionAddition(a: string, b: string) {
  const aDigits = a.split("").map((digit) => parseInt(digit));
  const bDigits = b.split("").map((digit) => parseInt(digit));
  const result: number[] = [];
  let carry = 0;
  while (aDigits.length > 0 || bDigits.length > 0) {
    const aDigit = aDigits.pop() || 0;
    const bDigit = bDigits.pop() || 0;
    const sum = aDigit + bDigit + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
  }
  if (carry > 0) {
    result.push(carry);
  }
  return result.reverse().join("");
}

function merge(left: number[], right: number[]) {
  const result: number[] = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift()!);
    } else {
      result.push(right.shift()!);
    }
  }
  return result.concat(left).concat(right);
}

function mergeSort(arr: number[]) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
