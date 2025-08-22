// Problem 1
function reverseString(a) {
  let b = "";
  for (let i = 0; i < a.length; i++) {
    b = a[i] + b;
  }
  return b;
}

// Problem 2

function countVowels(word) {
  let a = 0;
  let b = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (
      b[i] === "a" ||
      b[i] === "e" ||
      b[i] === "i" ||
      b[i] === "o" ||
      b[i] === "u"
    ) {
      a = a + 1;
    }
  }
  return a;
}

// problem 3

function checkPalindrome(word) {
  const a = word.toLowerCase();
  let b = "";
  for (let i = 0; i < a.length; i++) {
    b = a[i] + b;
  }

  if (a === b) {
    return true;
  } else {
    return false;
  }
}

// Problem 4

function findMaxNumber(numbers) {
  let b = 0;
  if (Array.isArray(numbers) === false) {
    return "not array";
  }

  for (let num of numbers) {
    if (typeof num !== "number") {
      return "Invalid type of data";
    }
  }

  for (let num of numbers) {
    if (num > b) {
      b = num;
    }
  }
  return b;
}

// Problem 5
function removeDuplicate(a) {
  if (Array.isArray(a) === false) {
    return "not array";
  }

  const b = [];

  for (let i of a) {
    if (b.includes(i) === false) {
      b.push(i);
    }
  }
  return b;
}

// const res = findMaxNumber([66,234,243,423,35453,19]);
// console.log(res);
