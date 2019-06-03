// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const len = (n * 2) - 1;
    let arr = new Array(len).fill(' ');
    let start = Math.floor(len / 2);
    let end = start;

    if (len === 1) {
        console.log('#');
        return;
    }

    while(end < len) {
        arr[start] = '#';
        arr[end] = '#';
        console.log(arr.join(''));
        start--;
        end++;
    }
    
}

module.exports = pyramid;
