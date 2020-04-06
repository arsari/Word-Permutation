const prompt = require('prompt');
const permutation = require('./main');

function onError(error) {
  console.log(error);
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

prompt.get(schema, (error, user) => {
  if (error) {
    return onError(error);
  }
  console.log('\nDistinguishable Permutations');
  const result = permutation(user.word);

  console.log(`\nWord ${user.word.toUpperCase()} has a total of ${result.lengths} characters.`);
  console.log(`\nRepeated letters: ${JSON.stringify(result.repeated)}`);
  console.log(
    `\nThere are ${result.permutations.toLocaleString()} permutations of the word ${user.word.toUpperCase()}.\n`
  );
});
