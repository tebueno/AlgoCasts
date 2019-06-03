// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let freqObj = str.split('').reduce((obj, char) => {
        obj[char] = obj[char] + 1 || 1;
        return obj;
    }, {});

    let max = 0;
    let maxChar = null;

    for (let char in freqObj) {
        if (freqObj[char] > max) { 
            maxChar = char; 
            max = freqObj[char];
        }
    }

    return maxChar

}

module.exports = maxChar;