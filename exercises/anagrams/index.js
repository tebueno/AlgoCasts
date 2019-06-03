// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(strA, strB) {
    let cleanA = sanitizeString(strA).split('');
    let cleanB = sanitizeString(strB).split('');

    cleanA = cleanA.reduce((obj, char) => {
        obj[char] = obj[char] + 1 || 1;
        return obj;
    }, {});

    cleanB = cleanB.reduce((obj, char) => {
        obj[char] = obj[char] + 1 || 1;
        return obj;
    }, {});

    if(Object.keys(cleanA).length !== Object.keys(cleanB).length) { return false; }

    for (let char in cleanA) {
        if (!cleanB[char] || cleanA[char] !== cleanB[char]) { return false; }
    }

    return true;

}

sanitizeString = (str) => str.replace(/[^A-Z]/ig,'').toLowerCase();

module.exports = anagrams;
