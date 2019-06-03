// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const strArry = str.split(''),
          max = strArry.length - 1;
    let revStr = [];

    for (let i = max, j = 0; i >= 0; i--, j++){
        revStr[j] = strArry[i];
    }
    
    return revStr.join('');
}

module.exports = reverse;
