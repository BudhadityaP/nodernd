const _ = require('lodash')

// Palindrome : a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or nurses run.

const isPalindrome = (word) => {
    const reversed = word.includes(' ') ? _.without(word.split(''), ' ').reverse().join('') : word.split('').reverse().join('')
    word = word.includes(' ')  ? _.without(word.split(''), ' ').join('') : word
    console.log(`Given word = ${word}`);
    console.log(`Reversed word = ${reversed}`);
    console.log(`Is '${word}' a Palindrome ?`,word.toLowerCase() === reversed.toLowerCase() ? 'YES' : 'NO');
} 

isPalindrome('madam');