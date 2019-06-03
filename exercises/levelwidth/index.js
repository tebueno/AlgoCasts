// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let arr = [root, 's'],
        counters = [0];

    while (arr.length > 1) {
        const node = arr.shift();
        if (node.children) {
            counters[counters.length - 1] += 1;
            arr.push(...node.children);
        }
        if (node === 's') {
            arr.push('s');
            counters.push(0);
        } 

    }
    return counters;
}



module.exports = levelWidth;
