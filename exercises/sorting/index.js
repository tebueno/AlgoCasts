// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i -1; j++) {
            if (arr[j] > arr[j + 1]) { 
                const a = arr[j];
                const b = arr[j + 1];
                arr[j] = b;
                arr[j + 1] = a;
             }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }
        if (i !== indexOfMin) {
            const smallValue = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = smallValue;
        }
    }
    return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {
    let results = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }
    (right.length) ? results.push(...right) : results.push(left);
    return results;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
