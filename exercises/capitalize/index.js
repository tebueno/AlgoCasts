// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let words = str.split(' ');
    let i = 0;
    for (let word of words) {
        let char = word.split('');
        char[0] = char[0].toUpperCase();
        words[i] = char.join('');
        i++;
    }
    
    return words.join(' ');
}

module.exports = capitalize;
