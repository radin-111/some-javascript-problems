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

//  problem 6

function sumOfAllNumbers(numbers) {
  let sum = 0;

  if (Array.isArray(numbers) === false) {
    return "not array";
  }

  for (let num of numbers) {
    if (typeof num !== "number") {
      return "Invalid type of data";
    }
  }

  for (let num of numbers) {
    sum = sum + num;
  }

  return sum;
}
// Problem 7
function findEvenNumber(numbers) {
  let b = [];
  if (Array.isArray(numbers) === false) {
    return "not array";
  }

  for (let num of numbers) {
    if (typeof num !== "number") {
      return "Invalid type of data";
    }
  }

  for (let num of numbers) {
    if (num % 2 === 0 && !b.includes(num)) {
      b.push(num);
    }
  }

  return b;
}

// problem 8

function capitalizeFirstLetter(word) {
  if (typeof word !== "string") {
    return "invalid type";
  }

  let a = word.split(" ");
  let b = "";
  for (let i of a) {
    b = b + " " + i[0].toUpperCase() + i.slice(1);
  }

  return b;
}

// problem 9

function factorial(num) {
  let b = 1;
  if (typeof num !== "number") {
    return "Invalid type";
  }

  if (num === 0) {
    return 1;
  }

  if (num < 0) {
    return "factorial is not defined for negative numbers";
  }

  for (let i = 1; i <= num; i++) {
    b = b * i;
  }
  return b;
}

// problem 10

function pingPong() {
  let output = "";
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        output += "PingPong , ";
        process;
      } else {
        output += "Ping ,";
      }
    } else if (i % 5 === 0) {
      output += "Pong ,";
    } else {
      output+=`${i} , `;
    }
  }

  console.log(output)
}

