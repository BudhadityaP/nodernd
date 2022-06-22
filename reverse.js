// const _ = require('lodash');

const sentence = 'hello world this is my first node js file.'
console.log(sentence);

const sentenceWithoutFS = sentence.substring(0, sentence.length - 1)

const arrWords = sentenceWithoutFS.split(' ');
const reverseWords = arrWords.reverse();
const reverseSentence = reverseWords.join(' ') + '.';
console.log(reverseSentence);

