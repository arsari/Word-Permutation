const prompt = require('prompt');
const permutation = require('./main');

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
    console.log('Distinguishable Permutations');
    const res = permutation(result.word);

    console.log(`\nWord ${result.word.toUpperCase()} has a total of ${res.len} characters.`);
    console.log(`\nRepeated letters: ${JSON.stringify(res.rep)}`);
    console.log(`\nThere are ${res.perm} permutations of the word ${result.word.toUpperCase()}.\n`);
});
