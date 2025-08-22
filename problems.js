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


