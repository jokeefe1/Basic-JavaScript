// Do not change any of the function names

const getBiggest = (x, y) => {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x > y) {
    return x;
  }
  if (x < y) {
    return y;
  }
  if (x === y) {
    return x;
  }
};

const greeting = (language) => {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Spanish' -> 'Hola!'
  // language: 'Chinese' -> 'Ni Hao!'
  // if language is undefined return 'Hello!'
  switch (language) {
    case 'German':
      return 'Guten Tag!';
    case 'Spanish':
      return 'Hola!';
    case 'Chinese':
      return 'Ni Hao!';
    default:
      return 'Hello!';
  }
};

const isTenOrFive = (num) => {
  // return true if num is 10 or 5
  // otherwise return false
  return num === 10 || num === 5;
};

const isInRange = (num) => {
  // return true if num is less than 50 and greater than 20
  return num < 50 && num > 20;
};

const isInteger = (num) => {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  return Math.floor(num) === num;
};

const fizzBuzz = (num) => {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  }
  if (num % 3 === 0) {
    return 'fizz';
  }
  if (num % 5 === 0) {
    return 'buzz';
  }
  return num;
};

const isPrime = (num) => {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(num); i++, i++) {
    if (num % i === 0) {
      return false;
    }
    return true;
  }
};

const returnFirst = (arr) => {
  // return the first item from the array
  return arr[0];
};

const returnLast = (arr) => {
  // return the last item of the array
  return arr[arr.length - 1];
};

const getArrayLength = (arr) => {
  // return the length of the array
  return arr.length;
};

const incrementByOne = (arr) => {
  // arr is an array of integers
  // increase each integer by one
  // return the array
  return arr.map((item) => {
    return item + 1;
  });
};

const addItemToArray = (arr, item) => {
  // add the item to the end of the array
  // return the array
  return [...arr, item];
};

const addItemToFront = (arr, item) => {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  return [item, ...arr];
};

const wordsToSentence = (words) => {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  return [...words].join(' ').toString();
};

const contains = (arr, item) => {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  return arr.includes(item);
};

const addNumbers = (numbers) => {
  // numbers is an array of integers.
  // add all of the integers and return the value
  return numbers.reduce((prev, curr) => prev + curr, 0);
};

const averageTestScore = (testScores) => {
  // testScores is an array. Iterate over testScores and compute the average.
  // return the average
  const base = testScores.length;
  const sum = testScores.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  return sum / base;
};

const largestNumber = (numbers) => {
  // numbers is an array of integers
  // return the largest integer
  return numbers.sort((a, b) => (a > b ? -1 : 1))[0];
};

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber
};
