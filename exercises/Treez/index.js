function countInt(arr) {
    let result = arr.reduce((obj, nextVal) => {
                    obj[nextVal] = obj[nextVal] + 1 || 1;
                    return obj;
                }, {});

    return result;
}

//console.log(countInt([1, 2, 3, 3, 3]));



function aliquotSum(num) {
    let sum = 0;
    
    for(let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum;
}

let answers = [0, 1, 1, 3, 1, 6, 1, 7, 4, 8, 1, 16, 1, 10, 9];
for(let i = 1; i <= 15; i++) {
    console.log(aliquotSum(i) === answers[i - 1]);
}