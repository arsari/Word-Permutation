function factorial(number) {
  let fact = number;
  for (let i = number - 1; i > 0; i--) {
    fact *= i;
  }
  return fact;
}

function charCount(word) {
  const object = {};
  for (let i = 0; i < word.length; i++) {
    const l = word.charAt(i);
    object[l] = isNaN(object[l]) ? 1 : object[l] + 1;
  }
  return object;
}

function permutation(word) {
  const wl = word.length;
  const object = charCount(word);
  const key = Object.keys(object);
  let divBy = 1;

  for (const value of key) {
    if (object[value] !== 1) {
      divBy *= factorial(object[value]);
    }
  }

  const total = factorial(wl) / divBy;

  return {
    permutations: total,
    repeated: object,
    lengths: wl,
  };
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
  module.exports = permutation;
else window.permutation = permutation;
