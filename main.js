function factorial(num) {
  let fact = num;
    for (let i = num - 1; i > 0; i--) {
        fact *= i;
    }
    return fact;
}

function charCount(word) {
    const obj = {};
    for (let i = 0; i < word.length; i++) {
        const l = word.charAt(i);
        obj[l] = isNaN(obj[l]) ? 1 : obj[l] + 1;
    }
    return obj;
}

function permutation(word) {
    const wl = word.length;
    const obj = charCount(word);
    const key = Object.keys(obj);
    let divBy = 1;

    for (let i = 0; i < key.length; i++) {
        const value = key[i];
        if (obj[value] !== 1) {
            divBy *= factorial(obj[value]);
        }
    }

    const total = factorial(wl) / divBy;

    return {perm: total, rep: obj, len: wl};

}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = permutation;
  else
    window.permutation = permutation;
