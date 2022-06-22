// Anagram : a word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

const isAnagram = (w1, w2) => {
    const w1sorted = w1.toLowerCase().split('').sort().join('')
    const w2sorted = w2.toLowerCase().split('').sort().join('')
    console.log(w1sorted === w2sorted ? 'YES' : 'NO');
} 

isAnagram('Mary', 'Army');