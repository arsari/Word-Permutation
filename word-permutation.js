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

    const res = permutation(result.word);

    console.log(`\nWord "${result.word.toUpperCase()}" has a total of ${res.len} characters.`);
    console.log(`\nRepetitions ${JSON.stringify(res.rep)}`);
    console.log(`\nThere are ${res.perm} permutations of the word ${result.word.toUpperCase()}.\n`);
});
