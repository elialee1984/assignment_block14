/* Reverse Array */
// Based on the example inputs it is assumed that we're dealing with arrays of numbers.

// const reversed = [];
num = ['a', 'b', 'c', 'd', 'e', 'f'];
let right = num.length - 1;


for (let left = 0; left < num.length / 2; left++) {
    let temp = num[left];
    num[left] = num[right];
    num[right] = temp;

    right--;
}

console.log(num);