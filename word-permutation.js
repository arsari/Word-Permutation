const prompt = require('prompt');

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

    console.log(`\nWord "${word.toUpperCase()}" has a total of ${wl} characters.`);
    console.log(`\nRepetitions ${JSON.stringify(obj)}`);

    return total;
}

function onErr(err) {
    console.log(err);
    return 1;
}

const schema = {
    properties: {
        word: {
            description: 'Enter a word',
            pattern: /^[a-zA-Z]+$/,
            message: 'Word must be only letters.',
            required: true,
        },
    },
};

prompt.start();

prompt.get(schema, (err, result) => {
    if (err) {
        return onErr(err);
    }
    const totalPerm = permutation(result.word);
    console.log(
        `\nThere are ${totalPerm} permutations of the word ${result.word.toUpperCase()}.\n`
    );
});
